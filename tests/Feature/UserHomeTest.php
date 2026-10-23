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

test('la home utente elenca solo i propri tavoli aperti', function () {
    config(['tavolo.max_rooms' => 0]);
    $mine = Room::factory()->for($this->owner)->create();
    $expired = Room::factory()->for($this->owner)->create(['last_activity_at' => now()->subDays(2)]);
    $other = Room::factory()->for(User::factory()->create())->create();
    $guest = Room::factory()->create();
    Participant::factory()->for($mine)->create(['online' => true, 'last_seen_at' => now()]);

    $this->actingAs($this->owner)->get('/user/home')->assertOk()
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

    $this->actingAs($this->owner)->get('/user/home')->assertSee(config('tavolo.rooms_limit_message'))
        ->assertDontSee(route('rooms.store'), false);
});
