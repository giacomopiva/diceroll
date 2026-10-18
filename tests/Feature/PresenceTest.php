<?php

use App\Events\ParticipantJoined;
use App\Events\ParticipantLeft;
use App\Models\Participant;
use App\Models\Room;
use App\Services\PresenceService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;

uses(RefreshDatabase::class);

beforeEach(function () {
    Event::fake([ParticipantJoined::class, ParticipantLeft::class]);
});

/** Entra in un tavolo con il browser del test corrente e apre la pagina (come farebbe il redirect). */
function enter($test, Room $room, string $nick = 'Elara'): Participant
{
    $test->post("/t/{$room->code}/join", ['nickname' => $nick, 'color' => '#1f8a5b']);
    $test->get('/t/'.$room->code)->assertOk();

    return Participant::where('room_id', $room->id)->where('nickname', $nick)->firstOrFail();
}

test('aprire il tavolo mette online il partecipante e lo annuncia', function () {
    $room = Room::factory()->create();

    $participant = enter($this, $room);

    expect($participant->online)->toBeTrue()->and($participant->last_seen_at)->not->toBeNull();
    Event::assertDispatched(ParticipantJoined::class, fn (ParticipantJoined $e) => $e->broadcastOn()->name === 'table.'.$room->code
        && $e->broadcastWith() === ['id' => $participant->id, 'nickname' => 'Elara', 'color' => '#1f8a5b']);
});

test('ricaricare subito non annuncia di nuovo', function () {
    $room = Room::factory()->create();
    enter($this, $room);

    $this->get('/t/'.$room->code)->assertOk();
    $this->postJson("/t/{$room->code}/heartbeat")->assertNoContent();

    Event::assertDispatchedTimes(ParticipantJoined::class, 1);
});

test('l\'heartbeat aggiorna last_seen_at', function () {
    $room = Room::factory()->create();
    $participant = enter($this, $room);
    $before = $participant->fresh()->last_seen_at;

    $this->travel(20)->seconds();
    $this->postJson("/t/{$room->code}/heartbeat")->assertNoContent();

    expect($participant->fresh()->last_seen_at->gt($before))->toBeTrue();
});

test('dopo una pausa lunga l\'heartbeat lo riannuncia', function () {
    $room = Room::factory()->create();
    enter($this, $room);

    $this->travel(PresenceService::STALE_SECONDS + 5)->seconds();
    $this->postJson("/t/{$room->code}/heartbeat")->assertNoContent();

    Event::assertDispatchedTimes(ParticipantJoined::class, 2);
});

test('uscire segna offline e annuncia una volta sola', function () {
    $room = Room::factory()->create();
    $participant = enter($this, $room);

    $this->post("/t/{$room->code}/leave")->assertNoContent();
    $this->post("/t/{$room->code}/leave")->assertNoContent();

    expect($participant->fresh()->online)->toBeFalse();
    Event::assertDispatchedTimes(ParticipantLeft::class, 1);
    Event::assertDispatched(ParticipantLeft::class, fn (ParticipantLeft $e) => $e->broadcastWith() === ['id' => $participant->id]);
});

test('chi sparisce senza avvisare viene tolto dall\'heartbeat di un altro', function () {
    $room = Room::factory()->create();
    $ghost = Participant::factory()->for($room)->create(['online' => true, 'last_seen_at' => now()->subSeconds(PresenceService::STALE_SECONDS + 10)]);
    $alive = Participant::factory()->for($room)->create(['online' => true, 'last_seen_at' => now()]);
    $this->withSession(['participants.'.$room->id => $alive->id]);

    $this->postJson("/t/{$room->code}/heartbeat")->assertNoContent();

    expect($ghost->fresh()->online)->toBeFalse()->and($alive->fresh()->online)->toBeTrue();
    Event::assertDispatched(ParticipantLeft::class, fn (ParticipantLeft $e) => $e->broadcastWith() === ['id' => $ghost->id]);
    Event::assertNotDispatched(ParticipantLeft::class, fn (ParticipantLeft $e) => $e->broadcastWith() === ['id' => $alive->id]);
});

test('la lista iniziale contiene solo chi è davvero online, nel proprio tavolo', function () {
    $room = Room::factory()->create();
    Participant::factory()->for($room)->create(['nickname' => 'Presente', 'online' => true, 'last_seen_at' => now()]);
    Participant::factory()->for($room)->create(['nickname' => 'Uscito', 'online' => false, 'last_seen_at' => now()]);
    Participant::factory()->for($room)->create(['nickname' => 'Scaduto', 'online' => true, 'last_seen_at' => now()->subMinutes(5)]);
    Participant::factory()->for(Room::factory())->create(['nickname' => 'AltroTavolo', 'online' => true, 'last_seen_at' => now()]);

    enter($this, $room, 'Io');

    $html = $this->get('/t/'.$room->code)->getContent();
    preg_match('#<script type="application/json" id="presence">(.*?)</script>#s', $html, $m);
    $names = array_column(json_decode($m[1], true), 'nickname');

    expect($names)->toEqualCanonicalizing(['Presente', 'Io']);
});

test('heartbeat e uscita richiedono di essere nel tavolo', function () {
    $room = Room::factory()->create();

    $this->postJson("/t/{$room->code}/heartbeat")->assertForbidden();
    $this->postJson("/t/{$room->code}/leave")->assertForbidden();
    Event::assertNothingDispatched();
});
