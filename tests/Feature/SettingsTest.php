<?php

use App\Models\Participant;
use App\Models\Room;
use App\Models\Setting;
use App\Models\User;
use App\Services\SettingsService;
use Database\Seeders\SettingsSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;

uses(RefreshDatabase::class);

function settingsAdmin($test): void
{
    Role::findOrCreate('admin', 'web');
    $test->actingAs(User::factory()->create()->assignRole('admin'));
}

/** Salva un parametro come farebbe il pannello, e azzera la cache del servizio. */
function setting(string $key, string $value): void
{
    app(SettingsService::class)->save([$key => $value]);
}

test('0 tavoli vuol dire nessun limite', function () {
    setting('max_rooms', '0');
    Room::factory()->count(10)->create();

    $this->get('/')->assertOk()->assertSee('Crea un tavolo');
    $this->post('/rooms')->assertRedirect();

    expect(Room::count())->toBe(11);
});

test('0 giocatori vuol dire nessun limite', function () {
    setting('max_participants', '0');
    $room = Room::factory()->create();
    Participant::factory()->for($room)->count(10)->sequence(fn ($s) => ['color' => sprintf('#%06x', $s->index + 1)])
        ->create(['online' => true, 'last_seen_at' => now()]);

    $this->get('/t/'.$room->code)->assertOk()->assertDontSee('al completo')->assertSee('name="nickname"', false);
    $this->post("/t/{$room->code}/join", ['nickname' => 'Undicesimo', 'color' => '#1f8a5b'])->assertSessionHasNoErrors();

    expect(Participant::count())->toBe(11);
});

test('la scadenza viene dalle impostazioni, anche per il prune', function () {
    setting('expire_after_hours', '2');
    config(['tavolo.retention_days' => 0]);
    $old = Room::factory()->create(['last_activity_at' => now()->subHours(3)]);
    $fresh = Room::factory()->create(['last_activity_at' => now()->subHour()]);

    $this->get('/t/'.$old->code)->assertStatus(410);
    $this->get('/t/'.$fresh->code)->assertOk();
    expect(Room::active()->pluck('id')->all())->toBe([$fresh->id]);

    $this->artisan('tavolo:prune')->assertSuccessful();
    expect(Room::pluck('id')->all())->toBe([$fresh->id]);
});

test('abbassare la scadenza vale subito per i tavoli già aperti', function () {
    $room = Room::factory()->create(['last_activity_at' => now()->subHours(5)]);
    $this->get('/t/'.$room->code)->assertOk();
    $room->update(['last_activity_at' => now()->subHours(5)]); // la visita sopra l'ha aggiornata

    setting('expire_after_hours', '4');

    $this->get('/t/'.$room->code)->assertStatus(410);
});

test('il messaggio a tavolo pieno è personalizzabile e :max diventa il numero', function () {
    setting('max_participants', '2');
    setting('room_full_message', 'Spiacenti, massimo :max eroi per tavolo.');
    $room = Room::factory()->create();
    Participant::factory()->for($room)->count(2)->sequence(['color' => '#b3243a'], ['color' => '#2457b3'])
        ->create(['online' => true, 'last_seen_at' => now()]);

    $this->get('/t/'.$room->code)->assertSee('Spiacenti, massimo 2 eroi per tavolo.');
    $this->post("/t/{$room->code}/join", ['nickname' => 'Terzo', 'color' => '#1f8a5b'])
        ->assertSessionHasErrors(['room' => 'Spiacenti, massimo 2 eroi per tavolo.']);

    setting('room_full_message', '');
    $this->get('/t/'.$room->code)->assertSee('Il tavolo è al completo (2 giocatori). Riprova più tardi.');
});

test('lo storico mostra gli ultimi history_limit lanci', function () {
    setting('history_limit', '10');
    $room = Room::factory()->create();
    $this->post("/t/{$room->code}/join", ['nickname' => 'Elara', 'color' => '#1f8a5b']);
    $p = Participant::firstOrFail();
    foreach (range(1, 15) as $i) {
        $room->rolls()->create(['participant_id' => $p->id, 'dice' => ['d6'], 'values' => [1], 'seed' => $i, 'total' => 1]);
    }

    $html = $this->get('/t/'.$room->code)->assertOk()->assertSee('data-history-limit="10"', false)->getContent();
    preg_match('#<script type="application/json" id="history">(.*?)</script>#s', $html, $m);

    expect(array_column(json_decode($m[1], true), 'seed'))->toBe(range(6, 15));
});

test('i testi mostrano la scadenza delle impostazioni, al singolare e al plurale', function () {
    settingsAdmin($this);
    setting('expire_after_hours', '6');
    $room = Room::factory()->create();
    $this->post("/t/{$room->code}/join", ['nickname' => 'Elara', 'color' => '#1f8a5b']);

    $this->get('/t/'.$room->code)->assertSee('scadono dopo 6 ore');
    $this->get('/admin/tables')->assertSee('scadono dopo 6 ore');

    setting('expire_after_hours', '1');
    $expired = Room::factory()->create(['last_activity_at' => now()->subHours(2)]);
    $this->get('/t/'.$expired->code)->assertStatus(410)->assertSee('per più di 1 ora e non');
});

test('i valori fuori range nel database vengono riportati nel range', function () {
    Setting::create(['key' => 'expire_after_hours', 'value' => '99']);
    Setting::create(['key' => 'history_limit', 'value' => '3']);
    Setting::create(['key' => 'max_rooms', 'value' => '-5']);
    $s = app(SettingsService::class);

    expect($s->expireHours())->toBe(24)->and($s->historyLimit())->toBe(10)
        ->and($s->maxRooms())->toBe(0)->and($s->hasRoomsLimit())->toBeFalse();

    Setting::whereKey('expire_after_hours')->update(['value' => '0']);
    Setting::whereKey('history_limit')->update(['value' => '500']);
    $s->save([]); // azzera la cache

    expect($s->expireHours())->toBe(1)->and($s->historyLimit())->toBe(100);
});

test('il seeder riporta nel range una scadenza fuori range da config', function () {
    config(['tavolo.expire_after_hours' => 48]);

    $this->seed(SettingsSeeder::class);

    expect(Setting::find('expire_after_hours')->value)->toBe('24')
        ->and(Setting::count())->toBe(count(SettingsService::KEYS));
});

test('tutte le impostazioni si leggono con una sola query', function () {
    $this->seed(SettingsSeeder::class);
    $s = new SettingsService;

    DB::enableQueryLog();
    $s->expireHours();
    $s->maxRooms();
    $s->maxParticipants();
    $s->roomsLimitMessage();
    $s->roomFullMessage();
    $s->historyLimit();
    $queries = collect(DB::getQueryLog())->filter(fn ($q) => str_contains($q['query'], 'settings'));

    expect($queries)->toHaveCount(1);
});

test('il pannello mostra slider e campi con i valori correnti, e salva tutto', function () {
    settingsAdmin($this);
    setting('expire_after_hours', '8');
    setting('history_limit', '40');
    Room::factory()->create(['last_activity_at' => now()->subHours(3)]);

    $this->get('/admin/settings')->assertOk()
        ->assertSee('type="range"', false)
        ->assertSee('id="expire_after_hours"', false)->assertSee('8 ore')
        ->assertSee('id="history_limit"', false)->assertSee('40 lanci')
        ->assertSee('Messaggio a tavolo pieno')->assertSee(':max')
        ->assertSee('id="openRoomsIdleHours">[3', false);

    $this->put('/admin/settings', ['expire_after_hours' => 12, 'history_limit' => 50, 'max_rooms' => 0,
        'max_participants' => 0, 'rooms_limit_message' => '', 'room_full_message' => 'Pieno (:max)'])->assertRedirect('/admin/settings');

    $s = app(SettingsService::class);
    expect($s->expireHours())->toBe(12)->and($s->historyLimit())->toBe(50)
        ->and($s->maxRooms())->toBe(0)->and($s->maxParticipants())->toBe(0)
        ->and($s->roomFullTemplate())->toBe('Pieno (:max)');
});
