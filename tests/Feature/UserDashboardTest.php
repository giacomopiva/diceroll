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
    Role::findOrCreate('user', 'web');
    $this->owner = User::factory()->create()->assignRole('user');
});

function userRoll(Room $room, array $values): Roll
{
    $p = Participant::factory()->for($room)->create();

    return $room->rolls()->forceCreate([
        'room_id' => $room->id, 'participant_id' => $p->id, 'dice' => array_fill(0, count($values), 'd6'),
        'values' => $values, 'seed' => 1, 'total' => array_sum($values), 'created_at' => now(),
    ]);
}

test('la dashboard utente richiede il login e il ruolo user', function () {
    $this->get('/user/home')->assertRedirect('/login');

    $this->actingAs(User::factory()->create())->get('/user/home')->assertForbidden();
});

test('la dashboard utente conta solo i tavoli dell\'utente', function () {
    $mine = Room::factory()->for($this->owner)->create();
    $other = Room::factory()->for(User::factory()->create())->create();
    $guest = Room::factory()->create();
    userRoll($mine, [3, 4]);
    userRoll($other, [1]);
    userRoll($guest, [2, 2, 2]);

    $kpis = app(StatsService::class)->forUser($this->owner)->kpis();
    expect($kpis['rooms_total'])->toBe(1)
        ->and($kpis['rolls_total'])->toBe(1)
        ->and($kpis['dice_total'])->toBe(2)
        ->and($kpis['open_rooms'])->toBe(1);

    $all = app(StatsService::class)->kpis();
    expect($all['rooms_total'])->toBe(3)->and($all['dice_total'])->toBe(6);
});

test('la pagina mostra i tavoli propri, con link al tavolo, e non quelli degli altri', function () {
    $mine = Room::factory()->for($this->owner)->create();
    $other = Room::factory()->for(User::factory()->create())->create();
    userRoll($mine, [5]);
    userRoll($other, [6]);

    $this->actingAs($this->owner)->get('/user/home')->assertOk()
        ->assertSee('Area utente')->assertSee($mine->code)->assertSee(route('user.room.show', $mine), false)
        ->assertDontSee($other->code)->assertDontSee('Creato da')->assertDontSee('/admin/tables');
});

test('la cache dei dadi è separata per utente', function () {
    $mine = Room::factory()->for($this->owner)->create();
    $other = Room::factory()->for(User::factory()->create())->create();
    userRoll($mine, [1]);
    userRoll($other, [1, 2, 3]);

    expect(app(StatsService::class)->forUser($this->owner)->diceStats()['total_dice'])->toBe(1)
        ->and(app(StatsService::class)->diceStats()['total_dice'])->toBe(4);
});
