<?php

use App\Models\Participant;
use App\Models\Room;
use App\Models\User;
use App\Services\SettingsService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Role;

uses(RefreshDatabase::class);

function tableUser(array $attrs = []): User
{
    Role::findOrCreate('user', 'web');

    return User::factory()->create($attrs)->assignRole('user');
}

function fillTable(Room $room, int $n): void
{
    Participant::factory()->for($room)->count($n)->sequence(fn ($s) => ['color' => sprintf('#%06x', $s->index + 1)])
        ->create(['online' => true, 'last_seen_at' => now()]);
}

test('l\'utente vede e salva le proprie impostazioni', function () {
    $user = tableUser();
    $this->actingAs($user)->get('/user/settings')->assertOk()->assertSee('id="table_expire_hours"', false)
        ->assertSee('id="table_max_participants"', false)->assertSee('id="table_history_limit"', false)->assertSee('id="table_full_message"', false);

    $this->put('/user/settings', ['table_expire_hours' => 3, 'table_max_participants' => 4, 'table_history_limit' => 50, 'table_full_message' => 'Pieno: :max!'])
        ->assertRedirect('/user/settings');

    expect($user->fresh()->only(['table_expire_hours', 'table_max_participants', 'table_history_limit', 'table_full_message']))
        ->toBe(['table_expire_hours' => 3, 'table_max_participants' => 4, 'table_history_limit' => 50, 'table_full_message' => 'Pieno: :max!']);
});

test('i valori fuori range sono rifiutati', function (array $bad) {
    $ok = ['table_expire_hours' => 3, 'table_max_participants' => 4, 'table_history_limit' => 50];
    $this->actingAs(tableUser())->put('/user/settings', array_merge($ok, $bad))->assertSessionHasErrors(array_key_first($bad));
})->with([
    [['table_expire_hours' => 25]], [['table_expire_hours' => 0]],
    [['table_max_participants' => 1]], [['table_max_participants' => 11]],
    [['table_history_limit' => 9]], [['table_history_limit' => 101]],
    [['table_full_message' => str_repeat('a', 501)]],
]);

test('l\'admin non entra nelle impostazioni utente e i guest nemmeno', function () {
    $this->get('/user/settings')->assertRedirect('/login');
    Role::findOrCreate('admin', 'web');
    $this->actingAs(User::factory()->create()->assignRole('admin'))->get('/user/settings')->assertForbidden();
});

test('si torna ai valori predefiniti', function () {
    $user = tableUser(['table_expire_hours' => 3, 'table_full_message' => 'x']);
    $this->actingAs($user)->delete('/user/settings')->assertRedirect('/user/settings');

    expect($user->fresh()->table_expire_hours)->toBeNull()->and($user->fresh()->table_full_message)->toBeNull();
});

test('un tavolo creato da loggato appartiene all\'utente, da guest a nessuno', function () {
    $this->post('/rooms');
    expect(Room::first()->user_id)->toBeNull();

    $user = tableUser();
    $this->actingAs($user)->post('/rooms');
    expect(Room::latest('id')->first()->user_id)->toBe($user->id);
});

test('la scadenza del tavolo segue il proprietario, i guest l\'admin', function () {
    config(['tavolo.max_rooms' => 0]);
    $owner = tableUser(['table_expire_hours' => 2]);
    $mine = Room::factory()->for($owner)->create(['last_activity_at' => now()->subHours(3)]);
    $guest = Room::factory()->create(['last_activity_at' => now()->subHours(3)]);
    $longOwner = tableUser(['table_expire_hours' => 10]);
    $long = Room::factory()->for($longOwner)->create(['last_activity_at' => now()->subHours(5)]);

    $this->get('/t/'.$mine->code)->assertStatus(410);
    $this->get('/t/'.$guest->code)->assertOk();
    $this->get('/t/'.$long->code)->assertOk();
    expect(Room::active()->pluck('id')->sort()->values()->all())->toBe([$guest->id, $long->id])
        ->and(Room::expired()->pluck('id')->all())->toBe([$mine->id]);
});

test('il prune usa la scadenza personale più la conservazione', function () {
    config(['tavolo.retention_days' => 1]);
    $owner = tableUser(['table_expire_hours' => 2]);
    // scaduto da 2 ore + 1 giorno dopo: sì; scaduto da 1 giorno scarso: no
    $gone = Room::factory()->for($owner)->create(['last_activity_at' => now()->subHours(2)->subDays(1)->subMinute()]);
    $kept = Room::factory()->for($owner)->create(['last_activity_at' => now()->subHours(2)->subHours(23)]);
    $guestKept = Room::factory()->create(['last_activity_at' => now()->subHours(24)->subHours(23)]);

    $this->artisan('tavolo:prune')->assertSuccessful();

    expect(Room::pluck('id')->sort()->values()->all())->toBe([$kept->id, $guestKept->id]);
});

test('il limite di giocatori e il messaggio seguono il proprietario', function () {
    $owner = tableUser(['table_max_participants' => 2, 'table_full_message' => 'Solo :max eroi!']);
    $mine = Room::factory()->for($owner)->create();
    $guest = Room::factory()->create();
    fillTable($mine, 2);
    fillTable($guest, 2);

    $this->get('/t/'.$mine->code)->assertSee('Solo 2 eroi!');
    $this->get('/t/'.$guest->code)->assertSee('name="nickname"', false)->assertDontSee('al completo');
    $this->post("/t/{$mine->code}/join", ['nickname' => 'Terzo', 'color' => '#1f8a5b'])
        ->assertSessionHasErrors(['room' => 'Solo 2 eroi!']);
});

test('senza messaggio personale vale quello dell\'admin', function () {
    $owner = tableUser(['table_max_participants' => 3]);
    $room = Room::factory()->for($owner)->create();
    fillTable($room, 3);

    $this->get('/t/'.$room->code)->assertSee('Il tavolo è al completo (3 giocatori)');
});

test('lo storico segue il proprietario', function () {
    $owner = tableUser(['table_history_limit' => 40]);
    $room = Room::factory()->for($owner)->create();

    expect(app(SettingsService::class)->historyLimit($room))->toBe(40)
        ->and(app(SettingsService::class)->historyLimit(Room::factory()->create()))->toBe(20);
});

test('la pagina admin distingue le regole personalizzabili', function () {
    Role::findOrCreate('admin', 'web');
    $this->actingAs(User::factory()->create()->assignRole('admin'))->get('/admin/settings')
        ->assertOk()->assertSee("Personalizzabile dall'utente", false)->assertSee('Solo admin');
});

test('il messaggio a tavolo pieno parte da quello dell\'admin e uguale all\'admin non si fissa', function () {
    $user = tableUser();
    $default = app(SettingsService::class)->roomFullTemplate();

    $this->actingAs($user)->get('/user/settings')->assertSee($default);

    $this->put('/user/settings', ['table_expire_hours' => 3, 'table_max_participants' => 4, 'table_history_limit' => 50, 'table_full_message' => $default]);
    expect($user->fresh()->table_full_message)->toBeNull();
});
