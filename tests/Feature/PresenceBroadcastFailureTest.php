<?php

use App\Models\Participant;
use App\Models\Room;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Support\FailingBroadcaster;

uses(RefreshDatabase::class);

// Qui gli eventi NON sono finti: il broadcaster installato fallisce sempre.
beforeEach(fn () => FailingBroadcaster::install());

test('con Reverb giù aprire il tavolo funziona e il partecipante risulta online', function () {
    $room = Room::factory()->create();
    $this->post("/t/{$room->code}/join", ['nickname' => 'Elara', 'color' => '#1f8a5b']);

    $this->get('/t/'.$room->code)->assertOk();

    expect(Participant::firstOrFail()->online)->toBeTrue();
});

test('con Reverb giù heartbeat e uscita rispondono comunque', function () {
    $room = Room::factory()->create();
    $this->post("/t/{$room->code}/join", ['nickname' => 'Elara', 'color' => '#1f8a5b']);
    $this->get('/t/'.$room->code);

    $this->postJson("/t/{$room->code}/heartbeat")->assertNoContent();
    $this->postJson("/t/{$room->code}/leave")->assertNoContent();

    expect(Participant::firstOrFail()->online)->toBeFalse();
});
