<?php

use App\Models\Participant;
use App\Models\Room;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Role;

uses(RefreshDatabase::class);

beforeEach(function () {
    Role::findOrCreate('user', 'web');
    $this->owner = User::factory()->create()->assignRole('user');
});

test('l\'elenco utente mostra solo i propri tavoli aperti', function () {
    config(['tavolo.max_rooms' => 0]);
    $mine = Room::factory()->for($this->owner)->create();
    $expired = Room::factory()->for($this->owner)->create(['last_activity_at' => now()->subDays(2)]);
    $other = Room::factory()->for(User::factory()->create())->create();
    $guest = Room::factory()->create();
    Participant::factory()->for($mine)->create(['online' => true, 'last_seen_at' => now()]);

    $this->actingAs($this->owner)->get('/user/tables')->assertOk()
        ->assertSee($mine->code)->assertSee(route('table.show', $mine), false)
        ->assertDontSee($expired->code)->assertDontSee($other->code)->assertDontSee($guest->code)
        ->assertSee(route('rooms.store'), false)
        ->assertSee('data-copy="'.route('table.show', $mine).'"', false)->assertSee('target="_blank"', false);
});

test('il pulsante apre un tavolo a nome dell\'utente', function () {
    $this->actingAs($this->owner)->post('/rooms')->assertRedirect();

    expect(Room::first()->user_id)->toBe($this->owner->id);
});

test('al limite di tavoli il pulsante è disattivato e c\'è il messaggio', function () {
    config(['tavolo.max_rooms' => 1]);
    Room::factory()->create();

    $this->actingAs($this->owner)->get('/user/tables')->assertSee(config('tavolo.rooms_limit_message'))
        ->assertDontSee(route('rooms.store'), false);
});

test('i filtri sono gli stessi dell\'admin, sui soli tavoli dell\'utente', function () {
    $open = Room::factory()->for($this->owner)->create();
    $old = Room::factory()->for($this->owner)->create(['last_activity_at' => now()->subDays(2)]);
    $other = Room::factory()->for(User::factory()->create())->create();
    $this->actingAs($this->owner);

    $this->get('/user/tables')->assertSee($open->code)->assertDontSee($old->code)->assertDontSee($other->code);
    $this->get('/user/tables?stato=tutti')->assertSee($open->code)->assertSee($old->code)->assertDontSee($other->code);
    $this->get('/user/tables?stato=scaduti')->assertSee($old->code)->assertDontSee($open->code)->assertDontSee($other->code);
    $this->get('/user/tables')->assertDontSee('Creato da');
});

test('dettaglio ed eliminazione valgono solo per i propri tavoli', function () {
    $mine = Room::factory()->for($this->owner)->create();
    $other = Room::factory()->for(User::factory()->create())->create();
    $this->actingAs($this->owner);

    $this->get('/user/tables/'.$mine->code)->assertOk()->assertSee($mine->code);
    $this->get('/user/tables/'.$other->code)->assertNotFound();
    $this->delete('/user/tables/'.$other->code)->assertNotFound();
    expect(Room::find($other->id))->not->toBeNull();

    $this->delete('/user/tables/'.$mine->code)->assertRedirect('/user/tables');
    expect(Room::find($mine->id))->toBeNull();
});

test('l\'admin vede tutti i tavoli e chi li ha creati, gli stessi pulsanti dell\'utente', function () {
    Role::findOrCreate('admin', 'web');
    $admin = User::factory()->create()->assignRole('admin');
    $theirs = Room::factory()->for($this->owner)->create();
    $guest = Room::factory()->create();

    $this->actingAs($admin)->get('/admin/tables')->assertOk()
        ->assertSee($theirs->code)->assertSee($guest->code)->assertSee('Creato da')->assertSee($this->owner->name)->assertSee('guest')
        ->assertSee('data-copy="'.route('table.show', $theirs).'"', false)->assertSee(route('rooms.store'), false);
});
