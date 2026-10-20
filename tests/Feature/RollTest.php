<?php

use App\Events\DiceRolled;
use App\Models\Roll;
use App\Models\Room;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Tests\Support\FailingBroadcaster;

uses(RefreshDatabase::class);

function joinedRoom($test): Room
{
    $room = Room::factory()->create();
    $test->post("/t/{$room->code}/join", ['nickname' => 'Elara', 'color' => '#1f8a5b']);

    return $room;
}

test('il lancio decide valori e seed sul server', function () {
    Event::fake([DiceRolled::class]);
    $room = joinedRoom($this);

    $response = $this->postJson("/t/{$room->code}/rolls", ['dice' => ['d20', 'd6', 'd4', 'd10']])
        ->assertCreated()
        ->assertJsonPath('player.nickname', 'Elara')
        ->assertJsonPath('dice', ['d20', 'd6', 'd4', 'd10']);

    $values = $response->json('values');
    expect($values)->toHaveCount(4)
        ->and($values[0])->toBeBetween(1, 20)
        ->and($values[1])->toBeBetween(1, 6)
        ->and($values[2])->toBeBetween(1, 4)
        ->and($values[3])->toBeBetween(1, 10)
        ->and($response->json('total'))->toBe(array_sum($values))
        ->and($response->json('seed'))->toBeBetween(1, Roll::MAX_SEED);

    $roll = Roll::firstOrFail();
    expect($roll->values)->toBe($values)->and($roll->room_id)->toBe($room->id);
});

test('il client non può imporre valori né seed', function () {
    Event::fake([DiceRolled::class]);
    $room = joinedRoom($this);

    // Se i valori imposti venissero usati, 20 volte d6 darebbero sempre 99.
    for ($i = 0; $i < 20; $i++) {
        $this->postJson("/t/{$room->code}/rolls", ['dice' => ['d6'], 'values' => [99], 'seed' => 1, 'total' => 99])->assertCreated();
    }

    expect(Roll::pluck('values')->flatten()->max())->toBeLessThanOrEqual(6)
        ->and(Roll::pluck('total')->max())->toBeLessThanOrEqual(6)
        ->and(Roll::pluck('seed')->unique()->count())->toBeGreaterThan(1);
});

test('la distribuzione dei valori copre tutte le facce', function () {
    Event::fake([DiceRolled::class]);
    $room = joinedRoom($this);

    $this->postJson("/t/{$room->code}/rolls", ['dice' => array_fill(0, 40, 'd4')])->assertCreated();

    expect(Roll::firstOrFail()->values)->each->toBeBetween(1, 4);
});

test('il lancio viene trasmesso sul canale pubblico del tavolo', function () {
    Event::fake([DiceRolled::class]);
    $room = joinedRoom($this);

    $this->postJson("/t/{$room->code}/rolls", ['dice' => ['d20']])->assertCreated();

    Event::assertDispatched(DiceRolled::class, function (DiceRolled $event) use ($room) {
        return $event->broadcastOn()->name === 'table.'.$room->code
            && $event->broadcastWith()['id'] === Roll::first()->id
            && array_keys($event->broadcastWith()) === ['id', 'player', 'dice', 'values', 'seed', 'total', 'created_at', 'reroll_of', 'origin', 'combined_total'];
    });
});

test('chi non è nel tavolo non può lanciare', function () {
    Event::fake([DiceRolled::class]);
    $room = Room::factory()->create();

    $this->postJson("/t/{$room->code}/rolls", ['dice' => ['d20']])->assertForbidden();

    expect(Roll::count())->toBe(0);
    Event::assertNotDispatched(DiceRolled::class);
});

test('la validazione rifiuta tipi sconosciuti, liste vuote e più di 40 dadi', function (array $body) {
    Event::fake([DiceRolled::class]);
    $room = joinedRoom($this);

    $this->postJson("/t/{$room->code}/rolls", $body)->assertUnprocessable();

    expect(Roll::count())->toBe(0);
})->with([
    'tipo sconosciuto' => [['dice' => ['d7']]],
    'd100' => [['dice' => ['d100']]],
    'lista vuota' => [['dice' => []]],
    'senza dadi' => [[]],
    'non è una lista' => [['dice' => 'd20']],
    'elemento non stringa' => [['dice' => [20]]],
    'oltre 40' => [['dice' => array_fill(0, 41, 'd6')]],
]);

test('40 dadi sono ammessi', function () {
    Event::fake([DiceRolled::class]);
    $room = joinedRoom($this);

    $this->postJson("/t/{$room->code}/rolls", ['dice' => array_fill(0, 40, 'd6')])->assertCreated();
});

test('chi entra a partita iniziata trova gli ultimi lanci', function () {
    Event::fake([DiceRolled::class]);
    $room = joinedRoom($this);
    $this->postJson("/t/{$room->code}/rolls", ['dice' => ['d20']]);
    $total = Roll::first()->total;

    $this->get('/t/'.$room->code)->assertOk()->assertSee('id="history"', false)->assertSee('"total":'.$total, false);
});

test('lo storico non può chiudere il tag script', function () {
    Event::fake([DiceRolled::class]);
    $room = Room::factory()->create();
    $this->post("/t/{$room->code}/join", ['nickname' => '</script>x', 'color' => '#1f8a5b']);
    $this->postJson("/t/{$room->code}/rolls", ['dice' => ['d6']]);

    $this->get('/t/'.$room->code)->assertOk()
        ->assertDontSee('</script>x', false)
        ->assertSee('script\u003Ex', false);
});

test('se Reverb non risponde il lancio riesce comunque', function () {
    // Il test si basa sul broadcaster reale (che fallisce), non sull'evento finto: gli Event::fake delle altre prove qui non ci sono.
    FailingBroadcaster::install();
    $room = joinedRoom($this);

    $this->postJson("/t/{$room->code}/rolls", ['dice' => ['d20']])->assertCreated();

    expect(Roll::count())->toBe(1);
});
