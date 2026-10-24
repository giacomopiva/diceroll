<?php

use App\Models\Room;
use App\Services\SettingsService;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

function landingSetting(string $key, string $value): void
{
    app(SettingsService::class)->save([$key => $value]);
}

test('la landing ha il titolo, le sezioni e il form per creare un tavolo', function () {
    $html = $this->get('/')->assertOk()->getContent();

    expect($html)->toContain('<h1')->toContain('Tutti i dadi sullo stesso tavolo')
        ->toContain('id="come-funziona"')->toContain('id="dadi"')->toContain('id="cosa-vedono"')
        ->toContain('id="domande"')->toContain('id="crea"')
        ->toContain('action="'.route('rooms.store').'"');
    // Il pulsante ha un solo nome in tutta la pagina.
    expect(substr_count($html, 'Crea un tavolo'))->toBe(2);
});

test('i numeri citati nel testo vengono dalle impostazioni e dalla configurazione', function () {
    landingSetting('expire_after_hours', '6');
    landingSetting('max_participants', '3');
    landingSetting('history_limit', '35');
    config(['tavolo.retention_days' => 12]);

    $this->get('/')->assertOk()
        ->assertSee('Dopo 6 ore senza attività')
        ->assertSee('Fino a 3 giocatori per tavolo')
        ->assertSee('gli ultimi 35 lanci')
        ->assertSee('per 12 giorni dopo la scadenza')
        ->assertSee('fino a 40 per lancio');
});

test('con le scadenze al singolare e senza limiti il testo si adatta', function () {
    landingSetting('expire_after_hours', '1');
    landingSetting('max_participants', '0');
    config(['tavolo.retention_days' => 0]);

    $this->get('/')->assertOk()
        ->assertSee('Dopo 1 ora senza attività')
        ->assertSee("Non c'è un limite al numero di giocatori", false)
        ->assertSee('fino alla scadenza.');
});

test('a tavoli esauriti la pagina mostra il messaggio e nessun modo di crearne uno', function () {
    landingSetting('max_rooms', '1');
    landingSetting('rooms_limit_message', "Torna <b>domani</b>\nciao");
    Room::factory()->create();

    $html = $this->get('/')->assertOk()->getContent();

    expect($html)->toContain('Torna &lt;b&gt;domani&lt;/b&gt;<br />')
        ->not->toContain('Crea un tavolo')
        ->not->toContain('action="'.route('rooms.store').'"');
});

test('dopo Esci la landing offre il link per rientrare', function () {
    $room = Room::factory()->create();

    $this->withSession(['left_room' => $room->code])->get('/')->assertOk()
        ->assertSee('Sei uscito dal tavolo')->assertSee(route('table.show', $room), false);
});

test('meta, condivisione e JSON-LD sono presenti e validi', function () {
    $html = $this->get('/')->assertOk()->getContent();

    expect($html)->toContain('<meta name="description"')
        ->toContain('<link rel="canonical" href="'.route('home').'">')
        ->toContain('<meta property="og:image" content="'.asset('images/landing/og.jpg').'">')
        ->toContain('<meta name="twitter:card" content="summary_large_image">');

    preg_match('#<script type="application/ld\+json">(.*?)</script>#s', $html, $m);
    $schema = json_decode($m[1], true);
    expect($schema['@type'])->toBe('WebApplication')->and($schema['inLanguage'])->toBe('it');
});

test('ogni immagine della landing esiste', function () {
    $html = $this->get('/')->assertOk()->getContent();

    preg_match_all('#/images/landing/([\w.-]+\.jpg)#', $html, $m);
    expect(array_unique($m[1]))->not->toBeEmpty();
    foreach (array_unique($m[1]) as $file) {
        expect(public_path('images/landing/'.$file))->toBeFile();
    }
});

test('la pagina non usa monospace né emoji e ogni sezione ha un titolo', function () {
    $html = $this->get('/')->assertOk()->getContent();

    expect(preg_match('/[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}]/u', strip_tags($html)))->toBe(0)
        ->and(substr_count($html, '<h1'))->toBe(1)
        ->and(substr_count($html, '<section'))->toBeGreaterThanOrEqual(4)
        ->and(substr_count($html, '<h2'))->toBeGreaterThanOrEqual(substr_count($html, '<section class="how')
            + substr_count($html, '<section class="dice') + substr_count($html, '<section class="faq') + substr_count($html, '<section class="cta'));
});

test('il piè di pagina porta il credito con il link al sito dell\'autore', function () {
    $this->get('/')->assertOk()
        ->assertSee('Realizzato da')
        ->assertSee('<a href="https://www.giacomopiva.com" rel="noopener">Giacomo Piva</a>', false);
});
