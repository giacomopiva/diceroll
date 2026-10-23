<?php

use App\Models\Room;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Spatie\Permission\Models\Role;

uses(RefreshDatabase::class);

beforeEach(function () {
    Storage::fake('local');
    Role::findOrCreate('user', 'web');
    $this->owner = User::factory()->create()->assignRole('user');
});

function pic(int $px = 100, string $name = 'logo.png', int $kb = 0): UploadedFile
{
    $file = UploadedFile::fake()->image($name, $px, $px);

    return $kb ? $file->size($kb) : $file;
}

test('l\'utente carica un\'immagine e sceglie la posizione', function () {
    $this->actingAs($this->owner)->get('/user/appearance')->assertOk()->assertSee('Centro');

    $this->put('/user/appearance', ['image' => pic(), 'position' => 'center'])->assertRedirect('/user/appearance');

    $user = $this->owner->fresh();
    expect($user->table_logo_position)->toBe('center');
    Storage::disk('local')->assertExists($user->table_logo_path);
    $this->get('/user/appearance/image')->assertOk();
});

test('si può cambiare la posizione senza ricaricare l\'immagine, e sostituirla cancella la vecchia', function () {
    $this->actingAs($this->owner)->put('/user/appearance', ['image' => pic(), 'position' => 'left']);
    $old = $this->owner->fresh()->table_logo_path;

    $this->put('/user/appearance', ['position' => 'right']);
    expect($this->owner->fresh()->table_logo_path)->toBe($old)->and($this->owner->fresh()->table_logo_position)->toBe('right');

    $this->put('/user/appearance', ['image' => pic(50, 'altra.jpg'), 'position' => 'right']);
    Storage::disk('local')->assertMissing($old);
    Storage::disk('local')->assertExists($this->owner->fresh()->table_logo_path);
});

test('si può rimuovere l\'immagine', function () {
    $this->actingAs($this->owner)->put('/user/appearance', ['image' => pic(), 'position' => 'left']);
    $path = $this->owner->fresh()->table_logo_path;

    $this->delete('/user/appearance')->assertRedirect('/user/appearance');

    Storage::disk('local')->assertMissing($path);
    expect($this->owner->fresh()->table_logo_path)->toBeNull();
});

test('file e posizione non validi sono rifiutati', function (array $bad, string $field) {
    $this->actingAs($this->owner)->put('/user/appearance', array_merge(['position' => 'left'], $bad))->assertSessionHasErrors($field);
    expect($this->owner->fresh()->table_logo_path)->toBeNull();
})->with([
    'svg' => [fn () => ['image' => UploadedFile::fake()->createWithContent('x.svg', '<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>')], 'image'],
    'pdf' => [fn () => ['image' => UploadedFile::fake()->create('x.pdf', 10, 'application/pdf')], 'image'],
    'troppo pesante' => [fn () => ['image' => pic(100, 'big.png', config('tavolo.logo.max_kb') + 1)], 'image'],
    'troppo grande' => [fn () => ['image' => pic(config('tavolo.logo.max_px') + 1)], 'image'],
    'posizione sconosciuta' => [fn () => ['position' => 'basso'], 'position'],
    'verticale sconosciuta' => [fn () => ['vertical' => 'metà'], 'vertical'],
    'dimensione non prevista' => [fn () => ['size' => 60], 'size'],
]);

test('il tavolo mostra l\'immagine del proprietario nella posizione scelta, il guest no', function () {
    $this->actingAs($this->owner)->put('/user/appearance', ['image' => pic(), 'position' => 'right']);
    auth()->logout();

    $mine = Room::factory()->for($this->owner->fresh())->create();
    $guest = Room::factory()->create();
    foreach ([$mine, $guest] as $room) {
        $this->post("/t/{$room->code}/join", ['nickname' => 'Ada', 'color' => '#1f8a5b']);
    }

    $this->get("/t/{$mine->code}")->assertSee('class="stage-logo logo-right logo-top"', false)->assertSee("/t/{$mine->code}/logo", false);
    $this->get("/t/{$mine->code}/logo")->assertOk()->assertHeader('X-Content-Type-Options', 'nosniff');
    $this->get("/t/{$guest->code}")->assertDontSee('stage-logo', false);
    $this->get("/t/{$guest->code}/logo")->assertNotFound();
});

test('l\'area è riservata agli utenti', function () {
    $this->get('/user/appearance')->assertRedirect('/login');
});

test('posizione verticale e dimensione si salvano e arrivano al tavolo', function () {
    $this->actingAs($this->owner)->put('/user/appearance', ['image' => pic(), 'position' => 'center', 'vertical' => 'bottom', 'size' => 50]);
    auth()->logout();

    expect($this->owner->fresh()->only(['table_logo_vertical', 'table_logo_size']))->toBe(['table_logo_vertical' => 'bottom', 'table_logo_size' => 50]);

    $room = Room::factory()->for($this->owner->fresh())->create();
    $this->post("/t/{$room->code}/join", ['nickname' => 'Ada', 'color' => '#1f8a5b']);
    $this->get("/t/{$room->code}")->assertSee('logo-at-bottom', false)->assertSee('--s: 0.5', false)
        ->assertSee('class="stage-logo logo-center logo-bottom"', false);
});

test('senza scelte il logo sta in alto a piena dimensione', function () {
    $this->actingAs($this->owner)->put('/user/appearance', ['image' => pic(), 'position' => 'left']);
    auth()->logout();
    $room = Room::factory()->for($this->owner->fresh())->create();
    $this->post("/t/{$room->code}/join", ['nickname' => 'Ada', 'color' => '#1f8a5b']);

    $this->get("/t/{$room->code}")->assertSee('logo-at-top', false)->assertSee('--s: 1', false);
});
