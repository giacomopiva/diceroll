<?php

use App\Events\DiceRolled;
use App\Events\ParticipantJoined;
use App\Models\Participant;
use App\Models\Room;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;

uses(RefreshDatabase::class);

beforeEach(function () {
    Event::fake([DiceRolled::class, ParticipantJoined::class]);
});

function expiredRoom(int $hoursAgo = 25): Room
{
    return Room::factory()->create(['last_activity_at' => now()->subHours($hoursAgo)]);
}

test('un tavolo attivo da meno di 24 ore è raggiungibile', function () {
    $room = Room::factory()->create(['last_activity_at' => now()->subHours(23)]);

    $this->get('/t/'.$room->code)->assertOk()->assertSee('Entra al tavolo');
    expect($room->fresh()->isExpired())->toBeFalse();
});

test('un tavolo fermo da più di 24 ore risponde 410 con la pagina "scaduto"', function () {
    $room = expiredRoom();

    $this->get('/t/'.$room->code)->assertStatus(410)->assertSee('Tavolo scaduto')->assertSee('Crea un tavolo');
});

test('un tavolo scaduto rifiuta join, lanci, heartbeat e uscita', function () {
    $room = expiredRoom();
    $participant = Participant::factory()->for($room)->create();
    $this->withSession(['participants.'.$room->id => $participant->id]);

    $this->post("/t/{$room->code}/join", ['nickname' => 'X', 'color' => '#1f8a5b'])->assertStatus(410);
    $this->postJson("/t/{$room->code}/rolls", ['dice' => ['d20']])->assertStatus(410)->assertJson(['message' => 'Tavolo scaduto.']);
    $this->postJson("/t/{$room->code}/heartbeat")->assertStatus(410);
    $this->postJson("/t/{$room->code}/leave")->assertStatus(410);

    expect($room->rolls()->count())->toBe(0);
    Event::assertNothingDispatched();
});

test('la scadenza si misura dall\'ultima attività, non dalla creazione', function () {
    $room = Room::factory()->create(['created_at' => now()->subDays(3), 'last_activity_at' => now()->subHour()]);

    $this->get('/t/'.$room->code)->assertOk();
});

test('join e lanci rinnovano la scadenza', function () {
    $room = Room::factory()->create(['last_activity_at' => now()->subHours(20)]);

    $this->post("/t/{$room->code}/join", ['nickname' => 'Elara', 'color' => '#1f8a5b']);
    expect($room->fresh()->last_activity_at->gt(now()->subMinute()))->toBeTrue();

    $room->update(['last_activity_at' => now()->subHours(20)]);
    $this->postJson("/t/{$room->code}/rolls", ['dice' => ['d6']])->assertCreated();
    expect($room->fresh()->last_activity_at->gt(now()->subMinute()))->toBeTrue();
});

test('aprire la pagina rinnova la scadenza, ma con al massimo una scrittura ogni 5 minuti', function () {
    $room = Room::factory()->create(['last_activity_at' => now()->subHours(20)]);
    $this->post("/t/{$room->code}/join", ['nickname' => 'Elara', 'color' => '#1f8a5b']);

    $recent = now()->subMinutes(2)->startOfSecond();
    $room->update(['last_activity_at' => $recent]);
    $this->get('/t/'.$room->code)->assertOk();
    expect($room->fresh()->last_activity_at->equalTo($recent))->toBeTrue(); // troppo recente: nessuna scrittura

    $room->update(['last_activity_at' => now()->subHours(3)]);
    $this->get('/t/'.$room->code)->assertOk();
    expect($room->fresh()->last_activity_at->gt(now()->subMinute()))->toBeTrue();
});

test('gli scope active ed expired dividono i tavoli', function () {
    $active = Room::factory()->create(['last_activity_at' => now()->subHours(2)]);
    $old = expiredRoom();

    expect(Room::active()->pluck('id')->all())->toBe([$active->id])
        ->and(Room::expired()->pluck('id')->all())->toBe([$old->id]);
});

test('tavolo:prune cancella solo i tavoli scaduti da oltre il periodo di conservazione, con i loro dati', function () {
    config(['tavolo.retention_days' => 30]);
    $keep = expiredRoom(24 * 10);            // scaduto da 9 giorni: si tiene per le statistiche
    $drop = expiredRoom(24 * 31 + 24);       // scaduto da oltre 30 giorni
    $active = Room::factory()->create();
    $p = Participant::factory()->for($drop)->create();
    $drop->rolls()->create(['participant_id' => $p->id, 'dice' => ['d6'], 'values' => [3], 'seed' => 1, 'total' => 3]);

    $this->artisan('tavolo:prune')->expectsOutput('1 tavoli cancellati.')->assertSuccessful();

    expect(Room::pluck('id')->sort()->values()->all())->toBe(collect([$keep->id, $active->id])->sort()->values()->all())
        ->and(Participant::count())->toBe(0)
        ->and(DB::table('rolls')->count())->toBe(0);
});

test('tavolo:prune --dry-run non cancella nulla', function () {
    config(['tavolo.retention_days' => 0]);
    expiredRoom();

    $this->artisan('tavolo:prune --dry-run')->expectsOutput('1 tavoli da cancellare (dry run).')->assertSuccessful();

    expect(Room::count())->toBe(1);
});

test('con retention_days = 0 i tavoli si cancellano appena scadono', function () {
    config(['tavolo.retention_days' => 0]);
    expiredRoom();
    Room::factory()->create();

    $this->artisan('tavolo:prune')->assertSuccessful();

    expect(Room::count())->toBe(1);
});

test('tavolo:prune è pianificato ogni ora', function () {
    $events = collect(app(Schedule::class)->events())->filter(fn ($e) => str_contains($e->command, 'tavolo:prune'));

    expect($events)->toHaveCount(1)->and($events->first()->expression)->toBe('0 * * * *');
});
