<?php

use App\Models\Participant;
use App\Models\Roll;
use App\Models\Room;
use App\Models\Setting;
use App\Models\User;
use App\Services\SettingsService;
use Database\Seeders\SettingsSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Role;

uses(RefreshDatabase::class);

/** Il form delle impostazioni completo, con i default, e le modifiche indicate. */
function settingsForm(array $changes = []): array
{
    return array_merge(['expire_after_hours' => 24, 'max_rooms' => 4, 'max_participants' => 6,
        'rooms_limit_message' => '', 'room_full_message' => '', 'history_limit' => 20], $changes);
}

function limitsAdmin($test): User
{
    Role::findOrCreate('admin', 'web');
    $admin = User::factory()->create();
    $admin->assignRole('admin');
    $test->actingAs($admin);

    return $admin;
}

test('i limiti di default sono 4 tavoli e 6 partecipanti', function () {
    $s = app(SettingsService::class);

    expect($s->maxRooms())->toBe(4)->and($s->maxParticipants())->toBe(6);
});

test('si possono creare tavoli fino al massimo, poi appare il messaggio', function () {
    Room::factory()->count(3)->create();

    $this->post('/rooms')->assertRedirect();
    expect(Room::count())->toBe(4);

    $this->post('/rooms')->assertRedirect(route('home'));
    expect(Room::count())->toBe(4);

    $this->get('/')->assertOk()
        ->assertSee(config('tavolo.rooms_limit_message'))
        ->assertDontSee('Crea un tavolo');
});

test('i tavoli scaduti non contano nel limite', function () {
    Room::factory()->count(4)->create(['last_activity_at' => now()->subDays(2)]);

    $this->post('/rooms');
    expect(Room::count())->toBe(5);
});

test('il messaggio personalizzato viene mostrato con escape', function () {
    Setting::create(['key' => 'max_rooms', 'value' => '1']);
    Setting::create(['key' => 'rooms_limit_message', 'value' => "Torna <b>domani</b>\nciao"]);
    Room::factory()->create();

    $this->get('/')->assertSee('Torna &lt;b&gt;domani&lt;/b&gt;<br />', false)->assertSee('ciao');
});

test('un tavolo pieno non accoglie nuovi giocatori online', function () {
    Setting::create(['key' => 'max_participants', 'value' => '2']);
    $room = Room::factory()->create();
    Participant::factory()->for($room)->count(2)->sequence(['color' => '#b3243a'], ['color' => '#2457b3'])
        ->create(['online' => true, 'last_seen_at' => now()]);

    $this->get('/t/'.$room->code)->assertOk()->assertSee('al completo')->assertDontSee('name="nickname"', false);

    $this->post("/t/{$room->code}/join", ['nickname' => 'Terzo', 'color' => '#1f8a5b'])
        ->assertSessionHasErrors('room');
    expect(Participant::count())->toBe(2);
});

test('chi è offline non occupa un posto, e chi è già dentro può aggiornare i dati', function () {
    Setting::create(['key' => 'max_participants', 'value' => '1']);
    $room = Room::factory()->create();
    $this->post("/t/{$room->code}/join", ['nickname' => 'Elara', 'color' => '#1f8a5b'])->assertSessionHasNoErrors();
    $this->get('/t/'.$room->code); // online: tavolo pieno

    $this->post("/t/{$room->code}/join", ['nickname' => 'Elara2', 'color' => '#b3243a'])->assertSessionHasNoErrors();
    expect(Participant::first()->nickname)->toBe('Elara2');

    Participant::first()->update(['online' => false]);
    $this->flushSession();
    $this->post("/t/{$room->code}/join", ['nickname' => 'Thorin', 'color' => '#2457b3'])->assertSessionHasNoErrors();
    expect(Participant::count())->toBe(2);
});

test('l\'admin salva le impostazioni e il limite cambia', function () {
    limitsAdmin($this);

    $this->get('/admin/settings')->assertOk()->assertSee('value="4"', false)->assertSee('value="6"', false);

    $this->put('/admin/settings', settingsForm(['max_rooms' => 2, 'max_participants' => 3, 'rooms_limit_message' => 'Pieno!']))
        ->assertRedirect('/admin/settings');

    $s = app(SettingsService::class);
    expect($s->maxRooms())->toBe(2)->and($s->maxParticipants())->toBe(3)->and($s->roomsLimitMessage())->toBe('Pieno!');

    $this->put('/admin/settings', settingsForm(['max_rooms' => 2, 'max_participants' => 3, 'rooms_limit_message' => '']));
    expect(app(SettingsService::class)->roomsLimitMessage())->toBe(config('tavolo.rooms_limit_message'));
});

test('le impostazioni sono validate e riservate agli admin', function (array $data) {
    limitsAdmin($this);

    $this->put('/admin/settings', settingsForm($data))->assertSessionHasErrors();
    expect(Setting::count())->toBe(0);
})->with([
    'tavoli negativi' => [['max_rooms' => -1]],
    'partecipanti negativi' => [['max_participants' => -1]],
    'partecipanti non numerici' => [['max_participants' => 'x']],
    'messaggio troppo lungo' => [['rooms_limit_message' => str_repeat('a', 501)]],
    'messaggio a tavolo pieno troppo lungo' => [['room_full_message' => str_repeat('a', 501)]],
    'scadenza a zero' => [['expire_after_hours' => 0]],
    'scadenza oltre 24 ore' => [['expire_after_hours' => 25]],
    'scadenza non numerica' => [['expire_after_hours' => 'abc']],
    'storico sotto 10' => [['history_limit' => 9]],
    'storico oltre 100' => [['history_limit' => 101]],
    'scadenza mancante' => [['expire_after_hours' => null]],
]);

test('chi non è admin non accede alle impostazioni', function () {
    $this->get('/admin/settings')->assertRedirect();
    $this->put('/admin/settings', ['max_rooms' => 9, 'max_participants' => 9])->assertRedirect();
    expect(Setting::count())->toBe(0);
});

test('il seeder inserisce i valori iniziali senza sovrascrivere quelli dell\'admin', function () {
    Setting::create(['key' => 'max_rooms', 'value' => '9']);

    $this->seed(SettingsSeeder::class);
    $this->seed(SettingsSeeder::class);

    expect(Setting::count())->toBe(6)
        ->and(Setting::find('max_rooms')->value)->toBe('9')
        ->and(Setting::find('max_participants')->value)->toBe('6')
        ->and(Setting::find('rooms_limit_message')->value)->toBe(config('tavolo.rooms_limit_message'))
        ->and(Setting::find('room_full_message')->value)->toBe(config('tavolo.room_full_message'))
        ->and(Setting::find('expire_after_hours')->value)->toBe('24')
        ->and(Setting::find('history_limit')->value)->toBe('20');
});

test('l\'admin vede i contatori del tavolo e lo elimina con partecipanti e lanci', function () {
    limitsAdmin($this);
    $room = Room::factory()->create(['created_at' => now()->subHours(3)->subMinutes(5), 'last_activity_at' => now()]);
    $p = Participant::factory()->for($room)->create();
    $room->rolls()->forceCreate([
        'room_id' => $room->id, 'participant_id' => $p->id, 'dice' => ['d6'], 'values' => [3],
        'seed' => 1, 'total' => 3, 'created_at' => now()->subMinutes(40),
    ]);

    $this->get('/admin/tables')->assertOk()->assertSee('3 h 5 min')->assertSee('40 min');
    $this->get('/admin/tables/'.$room->code)->assertOk()->assertSee('3 h 5 min')->assertSee('40 min');

    $this->delete('/admin/tables/'.$room->code)->assertRedirect('/admin/tables');

    expect(Room::count())->toBe(0)->and(Participant::count())->toBe(0)->and(Roll::count())->toBe(0);
});

test('senza lanci l\'inattività parte dalla creazione', function () {
    $room = Room::factory()->create(['created_at' => now()->subMinutes(90)]);

    expect($room->lastRollAt())->toBeNull()
        ->and($room->idleFor())->toBe('1 h 30 min')
        ->and(Room::formatMinutes(2 * 1440 + 3 * 60 + 7))->toBe('2 g 3 h')
        ->and(Room::formatMinutes(0))->toBe('0 min');
});

test('solo l\'admin può eliminare un tavolo', function () {
    $room = Room::factory()->create();

    $this->delete('/admin/tables/'.$room->code)->assertRedirect();
    expect(Room::count())->toBe(1);
});
