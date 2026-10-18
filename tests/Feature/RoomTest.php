<?php

use App\Models\Participant;
use App\Models\Room;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('la home propone di creare un tavolo', function () {
    $this->get('/')->assertOk()->assertSee('Crea un tavolo');
});

test('creare una stanza genera un codice xxx-xxx-xxx e reindirizza al tavolo', function () {
    $response = $this->post('/rooms');

    $room = Room::firstOrFail();
    expect($room->code)->toMatch('/^'.Room::CODE_PATTERN.'$/');
    expect($room->last_activity_at)->not->toBeNull();
    $response->assertRedirect('/t/'.$room->code);
});

test('i codici non contengono caratteri ambigui', function () {
    for ($i = 0; $i < 200; $i++) {
        expect(Room::generateCode())->not->toMatch('/[ilo01]/');
    }
});

test('un codice con formato sbagliato o inesistente dà 404', function () {
    $this->get('/t/abc')->assertNotFound();
    $this->get('/t/aaa-aaa-aaa')->assertNotFound();
});

test('chi non è ancora nel tavolo vede il form di ingresso', function () {
    $room = Room::factory()->create();

    $this->get('/t/'.$room->code)->assertOk()->assertSee('Entra al tavolo');
});

test('il join crea il partecipante e apre il tavolo', function () {
    $room = Room::factory()->create();

    $this->post("/t/{$room->code}/join", ['nickname' => 'Elara', 'color' => '#1F8A5B'])
        ->assertRedirect('/t/'.$room->code);

    $participant = Participant::firstOrFail();
    expect($participant->room_id)->toBe($room->id)
        ->and($participant->nickname)->toBe('Elara')
        ->and($participant->color)->toBe('#1f8a5b');

    $this->get('/t/'.$room->code)->assertOk()->assertSee('Elara')->assertDontSee('Entra al tavolo');
});

test('un secondo join dallo stesso browser aggiorna il partecipante', function () {
    $room = Room::factory()->create();

    $this->post("/t/{$room->code}/join", ['nickname' => 'Elara', 'color' => '#1f8a5b']);
    $this->post("/t/{$room->code}/join", ['nickname' => 'Thorin', 'color' => '#b3243a']);

    expect(Participant::count())->toBe(1)
        ->and(Participant::first()->nickname)->toBe('Thorin');
});

test('l\'identità di un tavolo non vale per un altro', function () {
    [$a, $b] = Room::factory()->count(2)->create();

    $this->post("/t/{$a->code}/join", ['nickname' => 'Elara', 'color' => '#1f8a5b']);

    $this->get('/t/'.$b->code)->assertSee('Entra al tavolo');
});

test('il join valida nickname e colore', function (array $data, string $field) {
    $room = Room::factory()->create();

    $this->post("/t/{$room->code}/join", $data)->assertSessionHasErrors($field);
    expect(Participant::count())->toBe(0);
})->with([
    'nickname vuoto' => [['nickname' => '', 'color' => '#1f8a5b'], 'nickname'],
    'nickname troppo lungo' => [['nickname' => str_repeat('a', 21), 'color' => '#1f8a5b'], 'nickname'],
    'colore non esadecimale' => [['nickname' => 'Elara', 'color' => 'rosso'], 'color'],
    'colore corto' => [['nickname' => 'Elara', 'color' => '#fff'], 'color'],
    'colore mancante' => [['nickname' => 'Elara'], 'color'],
]);

test('il nickname viene mostrato con escape', function () {
    $room = Room::factory()->create();

    $this->post("/t/{$room->code}/join", ['nickname' => '<b>x</b>', 'color' => '#1f8a5b']);

    $this->get('/t/'.$room->code)->assertDontSee('<b>x</b>', false)->assertSee('&lt;b&gt;x&lt;/b&gt;', false);
});
