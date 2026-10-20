<?php

use App\Events\DiceRolled;
use App\Models\Participant;
use App\Models\Roll;
use App\Models\Room;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Tests\Support\FailingBroadcaster;

uses(RefreshDatabase::class);

function rerollRoom($test): Room
{
    $room = Room::factory()->create();
    $test->post("/t/{$room->code}/join", ['nickname' => 'Elara', 'color' => '#1f8a5b']);

    return $room;
}

/** Lancio di Elara con valori noti (il test decide l'originale, il server decide il rilancio). */
function myRoll(Room $room, array $dice = ['d20', 'd6'], array $values = [7, 4]): Roll
{
    return $room->rolls()->create([
        'participant_id' => $room->participants()->firstOrFail()->id,
        'dice' => $dice, 'values' => $values, 'seed' => 123, 'total' => array_sum($values),
    ]);
}

const ORIGIN = ['x' => 1.234, 'z' => -2.345];

test('rilancio del proprio dado: valore deciso dal server e totale aggiornato', function () {
    Event::fake([DiceRolled::class]);
    $room = rerollRoom($this);
    $roll = myRoll($room);

    $res = $this->postJson("/t/{$room->code}/rolls/{$roll->id}/reroll", ['index' => 0, 'origin' => ORIGIN])
        ->assertCreated()
        ->assertJsonPath('dice', ['d20'])
        ->assertJsonPath('reroll_of', ['id' => $roll->id, 'index' => 0])
        ->assertJsonPath('origin', ['x' => 1.23, 'z' => -2.35]);

    $new = Roll::findOrFail($res->json('id'));
    expect($new->values[0])->toBeBetween(1, 20)
        ->and($new->total)->toBe($new->values[0])
        ->and($new->reroll_of_id)->toBe($roll->id)
        ->and($new->reroll_index)->toBe(0)
        ->and($new->seed)->toBeBetween(1, Roll::MAX_SEED)
        ->and($new->origin)->toBe(['x' => 1.23, 'z' => -2.35])
        ->and($new->combined_total)->toBe(11 - 7 + $new->values[0])
        ->and($res->json('combined_total'))->toBe($new->combined_total);
});

test('il client non può imporre il valore del rilancio', function () {
    Event::fake([DiceRolled::class]);
    $room = rerollRoom($this);

    // Se il valore imposto venisse usato, 30 rilanci di un d4 darebbero sempre 20.
    for ($i = 0; $i < 30; $i++) {
        $roll = myRoll($room, ['d4'], [1]);
        $this->postJson("/t/{$room->code}/rolls/{$roll->id}/reroll", ['index' => 0, 'origin' => ORIGIN, 'values' => [20], 'value' => 20, 'seed' => 1, 'total' => 20])
            ->assertCreated();
    }

    expect(Roll::whereNotNull('reroll_of_id')->get()->flatMap->values)->each->toBeBetween(1, 4)
        ->and(Roll::whereNotNull('reroll_of_id')->pluck('seed')->unique()->count())->toBeGreaterThan(1);
});

test('non si rilancia il dado di un altro partecipante', function () {
    Event::fake([DiceRolled::class]);
    $room = rerollRoom($this);
    $other = Participant::factory()->create(['room_id' => $room->id]);
    $roll = $room->rolls()->create(['participant_id' => $other->id, 'dice' => ['d6'], 'values' => [3], 'seed' => 1, 'total' => 3]);

    $this->postJson("/t/{$room->code}/rolls/{$roll->id}/reroll", ['index' => 0, 'origin' => ORIGIN])->assertForbidden();

    expect(Roll::count())->toBe(1);
});

test('un lancio di un altro tavolo risponde 404', function () {
    Event::fake([DiceRolled::class]);
    $room = rerollRoom($this);
    $otherRoom = Room::factory()->create();
    $mine = $room->participants()->firstOrFail();
    $roll = $otherRoom->rolls()->create(['participant_id' => $mine->id, 'dice' => ['d6'], 'values' => [3], 'seed' => 1, 'total' => 3]);

    $this->postJson("/t/{$room->code}/rolls/{$roll->id}/reroll", ['index' => 0, 'origin' => ORIGIN])->assertNotFound();

    expect(Roll::count())->toBe(1);
});

test('la validazione rifiuta indice e origine non validi', function (array $body) {
    Event::fake([DiceRolled::class]);
    $room = rerollRoom($this);
    $roll = myRoll($room);

    $this->postJson("/t/{$room->code}/rolls/{$roll->id}/reroll", $body)->assertUnprocessable();

    expect(Roll::count())->toBe(1);
})->with([
    'indice oltre i dadi' => [['index' => 2, 'origin' => ORIGIN]],
    'indice negativo' => [['index' => -1, 'origin' => ORIGIN]],
    'senza indice' => [['origin' => ORIGIN]],
    'senza origine' => [['index' => 0]],
    'origine incompleta' => [['index' => 0, 'origin' => ['x' => 1]]],
    'x fuori dalla vaschetta' => [['index' => 0, 'origin' => ['x' => 9.3, 'z' => 0]]],
    'z fuori dalla vaschetta' => [['index' => 0, 'origin' => ['x' => 0, 'z' => -8]]],
    'origine non numerica' => [['index' => 0, 'origin' => ['x' => 'a', 'z' => 0]]],
]);

test('un dado si rilancia una volta sola', function () {
    Event::fake([DiceRolled::class]);
    $room = rerollRoom($this);
    $roll = myRoll($room);
    $url = "/t/{$room->code}/rolls/{$roll->id}/reroll";

    $this->postJson($url, ['index' => 1, 'origin' => ORIGIN])->assertCreated();
    $this->postJson($url, ['index' => 1, 'origin' => ORIGIN])->assertStatus(409);
    // L'altro dado dello stesso lancio resta rilanciabile.
    $this->postJson($url, ['index' => 0, 'origin' => ORIGIN])->assertCreated();

    expect(Roll::where('reroll_of_id', $roll->id)->where('reroll_index', 1)->count())->toBe(1);
});

test('il vincolo unico regge anche se il controllo viene aggirato', function () {
    $room = rerollRoom($this);
    $roll = myRoll($room);
    $attrs = ['participant_id' => $roll->participant_id, 'dice' => ['d20'], 'values' => [5], 'seed' => 1, 'total' => 5, 'reroll_of_id' => $roll->id, 'reroll_index' => 0];
    $room->rolls()->create($attrs);

    expect(fn () => $room->rolls()->create($attrs))->toThrow(UniqueConstraintViolationException::class);
});

test('un rilancio si può rilanciare, col totale calcolato dal precedente', function () {
    Event::fake([DiceRolled::class]);
    $room = rerollRoom($this);
    $roll = myRoll($room);

    $first = $this->postJson("/t/{$room->code}/rolls/{$roll->id}/reroll", ['index' => 0, 'origin' => ORIGIN])->assertCreated();
    $second = $this->postJson("/t/{$room->code}/rolls/{$first->json('id')}/reroll", ['index' => 0, 'origin' => ORIGIN])
        ->assertCreated()
        ->assertJsonPath('reroll_of', ['id' => $first->json('id'), 'index' => 0]);

    $v1 = $first->json('values.0');
    $v2 = $second->json('values.0');
    expect($first->json('combined_total'))->toBe(11 - 7 + $v1)
        ->and($second->json('combined_total'))->toBe(11 - 7 + $v1 - $v1 + $v2);
});

test('senza partecipante in sessione è 403, a tavolo scaduto 410', function () {
    Event::fake([DiceRolled::class]);
    $room = Room::factory()->create();
    $p = Participant::factory()->create(['room_id' => $room->id]);
    $roll = $room->rolls()->create(['participant_id' => $p->id, 'dice' => ['d6'], 'values' => [3], 'seed' => 1, 'total' => 3]);
    $url = "/t/{$room->code}/rolls/{$roll->id}/reroll";

    $this->postJson($url, ['index' => 0, 'origin' => ORIGIN])->assertForbidden();

    $room->update(['last_activity_at' => now()->subHours(config('tavolo.expire_after_hours') + 1)]);
    $this->postJson($url, ['index' => 0, 'origin' => ORIGIN])->assertStatus(410);

    expect(Roll::count())->toBe(1);
});

test('il rilancio viene trasmesso con reroll_of, origin e combined_total', function () {
    Event::fake([DiceRolled::class]);
    $room = rerollRoom($this);
    $roll = myRoll($room);

    $this->postJson("/t/{$room->code}/rolls/{$roll->id}/reroll", ['index' => 1, 'origin' => ORIGIN])->assertCreated();

    Event::assertDispatched(DiceRolled::class, function (DiceRolled $event) use ($room, $roll) {
        $p = $event->broadcastWith();

        return $event->broadcastOn()->name === 'table.'.$room->code
            && $p['reroll_of'] === ['id' => $roll->id, 'index' => 1]
            && $p['origin'] === ['x' => 1.23, 'z' => -2.35]
            && $p['combined_total'] === 11 - 4 + $p['values'][0];
    });
});

test('i lanci normali hanno reroll_of, origin e combined_total a null', function () {
    Event::fake([DiceRolled::class]);
    $room = rerollRoom($this);

    $this->postJson("/t/{$room->code}/rolls", ['dice' => ['d6']])->assertCreated()
        ->assertJsonPath('reroll_of', null)->assertJsonPath('origin', null)->assertJsonPath('combined_total', null);

    Event::assertDispatched(DiceRolled::class, fn (DiceRolled $e) => $e->broadcastWith()['reroll_of'] === null
        && $e->broadcastWith()['origin'] === null && $e->broadcastWith()['combined_total'] === null);

    $page = $this->get('/t/'.$room->code)->assertOk();
    expect($page->viewData('history')->first())->toMatchArray(['reroll_of' => null, 'origin' => null, 'combined_total' => null]);
});

test('lo storico in pagina contiene reroll_of dei rilanci', function () {
    Event::fake([DiceRolled::class]);
    $room = rerollRoom($this);
    $roll = myRoll($room);
    $this->postJson("/t/{$room->code}/rolls/{$roll->id}/reroll", ['index' => 0, 'origin' => ORIGIN])->assertCreated();

    $history = $this->get('/t/'.$room->code)->assertOk()->viewData('history');

    expect($history->last()['reroll_of'])->toBe(['id' => $roll->id, 'index' => 0]);
});

test('se Reverb non risponde il rilancio riesce comunque', function () {
    FailingBroadcaster::install();
    $room = rerollRoom($this);
    $roll = myRoll($room);

    $this->postJson("/t/{$room->code}/rolls/{$roll->id}/reroll", ['index' => 0, 'origin' => ORIGIN])->assertCreated();

    expect(Roll::count())->toBe(2);
});
