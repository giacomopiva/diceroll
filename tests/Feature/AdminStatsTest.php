<?php

use App\Models\Participant;
use App\Models\Roll;
use App\Models\Room;
use App\Models\User;
use App\Services\StatsService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Cache;
use Spatie\Permission\Models\Role;

uses(RefreshDatabase::class);

beforeEach(function () {
    Cache::flush();
    Role::create(['name' => 'admin', 'guard_name' => 'web']);
    Role::create(['name' => 'user', 'guard_name' => 'web']);
});

function loginAdmin($test): User
{
    $admin = User::factory()->create();
    $admin->assignRole('admin');
    $test->actingAs($admin);

    return $admin;
}

/** Lancio con data e valori scelti dal test (created_at non è assegnabile in massa). */
function rollAt(Room $room, Participant $p, array $dice, array $values, $when = null): Roll
{
    return $room->rolls()->forceCreate([
        'room_id' => $room->id,
        'participant_id' => $p->id,
        'dice' => $dice,
        'values' => $values,
        'seed' => 1,
        'total' => array_sum($values),
        'created_at' => $when ?? now(),
    ]);
}

function stats(): StatsService
{
    return app(StatsService::class);
}

// ───────────────────────────── Accesso ─────────────────────────────

test('la dashboard e i tavoli sono solo per l\'admin', function () {
    $room = Room::factory()->create();

    $this->get('/admin/home')->assertRedirect('/login');
    $this->get('/admin/tables')->assertRedirect('/login');

    $user = User::factory()->create();
    $user->assignRole('user');
    $this->actingAs($user);

    $this->get('/admin/home')->assertForbidden();
    $this->get('/admin/tables')->assertForbidden();
    $this->get('/admin/tables/'.$room->code)->assertForbidden();
});

test('la dashboard si apre anche senza alcun dato', function () {
    loginAdmin($this);

    $this->get('/admin/home')->assertOk()
        ->assertSee('Tavoli aperti')->assertSee('Ancora nessun lancio.')->assertSee('Nessun tavolo aperto.');
    $this->get('/admin/tables')->assertOk()->assertSee('Nessun tavolo.');
});

// ───────────────────────────── KPI ─────────────────────────────

test('i KPI contano tavoli aperti, giocatori online e lanci', function () {
    $open = Room::factory()->create(['last_activity_at' => now()->subHours(2)]);
    Room::factory()->create(['last_activity_at' => now()->subHours(30)]); // scaduto
    $online = Participant::factory()->for($open)->create(['online' => true, 'last_seen_at' => now()]);
    Participant::factory()->for($open)->create(['online' => true, 'last_seen_at' => now()->subMinutes(10)]); // scaduto
    Participant::factory()->for($open)->create(['online' => false, 'last_seen_at' => now()]);

    rollAt($open, $online, ['d20'], [10]);
    rollAt($open, $online, ['d6', 'd6'], [3, 4]);
    rollAt($open, $online, ['d20'], [5], now()->subDays(1)->startOfDay()->addHours(12));

    $k = stats()->kpis();

    expect($k['open_rooms'])->toBe(1)
        ->and($k['open_rooms_with_players'])->toBe(1)
        ->and($k['online_players'])->toBe(1)
        ->and($k['rolls_today'])->toBe(2)
        ->and($k['rolls_today_delta'])->toBe(100.0)   // 2 oggi contro 1 ieri
        ->and($k['rolls_total'])->toBe(3)
        ->and($k['dice_total'])->toBe(4)
        ->and($k['rooms_total'])->toBe(2)
        ->and($k['avg_rolls_per_room'])->toBe(1.5);
});

test('il confronto con un periodo vuoto non inventa percentuali', function () {
    $room = Room::factory()->create();
    $p = Participant::factory()->for($room)->create();
    rollAt($room, $p, ['d20'], [10]);

    expect(stats()->kpis()['rolls_today_delta'])->toBeNull();
});

// ───────────────────────────── Serie temporali ─────────────────────────────

test('perDay copre 14 giorni, con gli zeri e i conteggi nel giorno giusto', function () {
    $room = Room::factory()->create(['created_at' => now()->subDays(3)]);
    $p = Participant::factory()->for($room)->create();
    rollAt($room, $p, ['d6'], [1], now()->subDays(3)->setTime(10, 0));
    rollAt($room, $p, ['d6'], [2], now()->subDays(3)->setTime(23, 59));
    rollAt($room, $p, ['d6'], [3]);
    rollAt($room, $p, ['d6'], [3], now()->subDays(20)); // fuori finestra

    $d = stats()->perDay(14);

    expect($d['rolls'])->toHaveCount(14)
        ->and($d['rolls'][10])->toBe(2)        // 3 giorni fa
        ->and($d['rolls'][13])->toBe(1)        // oggi
        ->and(array_sum($d['rolls']))->toBe(3)
        ->and($d['rooms'][10])->toBe(1)
        ->and($d['days'][13])->toBe(now()->toDateString());
});

test('perHour raggruppa i lanci per ora locale', function () {
    $room = Room::factory()->create();
    $p = Participant::factory()->for($room)->create();
    rollAt($room, $p, ['d6'], [1], now()->subDay()->setTime(21, 5));
    rollAt($room, $p, ['d6'], [1], now()->subDay()->setTime(21, 55));
    rollAt($room, $p, ['d6'], [1], now()->subDay()->setTime(3, 0));
    rollAt($room, $p, ['d6'], [1], now()->subDays(40)->setTime(8, 0)); // fuori finestra

    $h = stats()->perHour(30);

    expect($h)->toHaveCount(24)->and($h[21])->toBe(2)->and($h[3])->toBe(1)->and($h[8])->toBe(0);
});

// ───────────────────────────── Equità ─────────────────────────────

test('un d6 equo è nella norma, uno truccato viene segnalato', function () {
    $room = Room::factory()->create();
    $p = Participant::factory()->for($room)->create();

    // d6: 120 dadi ben distribuiti (20 per faccia)
    foreach (range(1, 6) as $face) {
        rollAt($room, $p, array_fill(0, 20, 'd6'), array_fill(0, 20, $face));
    }
    // d8: 200 dadi, la faccia 8 esce molto più spesso
    foreach (range(1, 7) as $face) {
        rollAt($room, $p, array_fill(0, 10, 'd8'), array_fill(0, 10, $face));
    }
    rollAt($room, $p, array_fill(0, 130, 'd8'), array_fill(0, 130, 8));

    $t = stats()->diceStats()['types'];

    expect($t['d6']['verdict'])->toBe('ok')->and($t['d6']['p'])->toBe(1.0)->and($t['d6']['count'])->toBe(120)
        ->and($t['d6']['observed'])->toBe([20, 20, 20, 20, 20, 20])
        ->and($t['d8']['verdict'])->toBe('alert')->and($t['d8']['p'])->toBeLessThan(0.001)
        ->and($t['d20']['count'])->toBe(0)->and($t['d20']['verdict'])->toBe('low');
});

test('il verdetto richiede un campione sufficiente e usa soglie 1% e 0,1%', function () {
    $s = stats();

    expect($s->verdict(99, 20, 0.0000001))->toBe('low')      // meno di 5 attesi per faccia
        ->and($s->verdict(100, 20, 0.0005))->toBe('alert')
        ->and($s->verdict(100, 20, 0.005))->toBe('watch')
        ->and($s->verdict(100, 20, 0.02))->toBe('ok');
});

test('le statistiche dei dadi sono in cache per 5 minuti', function () {
    $room = Room::factory()->create();
    $p = Participant::factory()->for($room)->create();
    rollAt($room, $p, ['d6'], [3]);

    expect(stats()->diceStats()['total_dice'])->toBe(1);

    rollAt($room, $p, ['d6'], [4]);
    expect(stats()->diceStats()['total_dice'])->toBe(1); // ancora la copia in cache

    Cache::forget(StatsService::DICE_CACHE_KEY);
    expect(stats()->diceStats()['total_dice'])->toBe(2);
});

// ───────────────────────────── Spunti ─────────────────────────────

test('gli spunti riassumono i dati e tacciono quando non ce ne sono', function () {
    expect(stats()->insights())->toBe([]);
    Cache::flush(); // la copia in cache dei dadi è ancora quella "vuota"

    $room = Room::factory()->create();
    Room::factory()->create(); // tavolo senza lanci
    $p = Participant::factory()->for($room)->create();
    rollAt($room, $p, ['d20', 'd20', 'd6'], [5, 7, 2], now()->subDay()->setTime(21, 30));

    $text = collect(stats()->insights())->pluck('text')->implode(' | ');

    expect($text)->toContain('Il dado più usato è il d20: 67%')
        ->toContain('tra le 21:00 e le 22:00: 1 lancio negli ultimi 30 giorni')
        ->toContain('con 1 lancio.')
        ->toContain('con 1 lancio e 1 giocatore.')
        ->toContain('50% dei tavoli creati non ha mai avuto un lancio (1 su 2)')
        ->toContain('Il tavolo più giocato è '.$room->code);
});

// ───────────────────────────── Pagine admin ─────────────────────────────

test('la dashboard mostra i dati reali', function () {
    loginAdmin($this);
    $room = Room::factory()->create();
    $p = Participant::factory()->for($room)->create(['nickname' => 'Elara', 'online' => true, 'last_seen_at' => now()]);
    rollAt($room, $p, ['d20'], [17]);

    $this->get('/admin/home')->assertOk()
        ->assertSee($room->code)->assertSee('Elara')->assertSee('1d20')->assertSee('1 online')
        ->assertSee('Equità dei dadi')->assertSee('Campione piccolo');
});

test('l\'elenco tavoli filtra per stato', function () {
    loginAdmin($this);
    $open = Room::factory()->create(['last_activity_at' => now()]);
    $old = Room::factory()->create(['last_activity_at' => now()->subDays(2)]);

    $this->get('/admin/tables')->assertSee($open->code)->assertSee($old->code);
    $this->get('/admin/tables?stato=aperti')->assertSee($open->code)->assertDontSee($old->code);
    $this->get('/admin/tables?stato=scaduti')->assertSee($old->code)->assertDontSee($open->code);
    $this->get('/admin/tables?stato=boh')->assertSee($open->code)->assertSee($old->code);
});

test('il dettaglio di un tavolo mostra giocatori e storico completo dei lanci', function () {
    loginAdmin($this);
    $room = Room::factory()->create();
    $p = Participant::factory()->for($room)->create(['nickname' => 'Thorin', 'color' => '#b3243a']);
    rollAt($room, $p, ['d20', 'd6'], [18, 4]);

    $this->get('/admin/tables/'.$room->code)->assertOk()
        ->assertSee('Thorin')->assertSee('1d6 + 1d20', false) // l'ordine è d6 prima di d20
        ->assertSee('d20: 18')->assertSee('d6: 4')->assertSee('22');
});

test('lo storico di un tavolo si impagina a 50 lanci', function () {
    loginAdmin($this);
    $room = Room::factory()->create();
    $p = Participant::factory()->for($room)->create();
    foreach (range(1, 55) as $i) {
        rollAt($room, $p, ['d6'], [1]);
    }

    $first = $this->get('/admin/tables/'.$room->code)->assertOk();
    expect(substr_count($first->getContent(), 'd6: 1'))->toBe(50);
    expect(substr_count($this->get('/admin/tables/'.$room->code.'?page=2')->getContent(), 'd6: 1'))->toBe(5);
});

test('un codice inesistente nell\'admin dà 404', function () {
    loginAdmin($this);

    $this->get('/admin/tables/aaa-aaa-aaa')->assertNotFound();
});
