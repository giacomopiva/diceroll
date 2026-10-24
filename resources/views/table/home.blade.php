<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>Tavolo dei Dadi: i dadi del gioco di ruolo, insieme online</title>
<meta name="description" content="Un tavolo virtuale per i dadi del gioco di ruolo: apri un link e tutto il gruppo vede ogni lancio in tempo reale. Senza registrazione, con dadi 3D.">
<meta name="theme-color" content="#121416">
<link rel="canonical" href="{{ route('home') }}">
<meta property="og:type" content="website">
<meta property="og:locale" content="it_IT">
<meta property="og:title" content="Tavolo dei Dadi: tutti i dadi sullo stesso tavolo">
<meta property="og:description" content="Apri un link e tutto il gruppo vede ogni lancio in tempo reale, ognuno da casa sua.">
<meta property="og:url" content="{{ route('home') }}">
<meta property="og:image" content="{{ asset('images/landing/og.jpg') }}">
<meta name="twitter:card" content="summary_large_image">
@php
    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'WebApplication',
        'name' => 'Tavolo dei Dadi',
        'description' => 'Un tavolo virtuale per i dadi del gioco di ruolo: tutto il gruppo vede ogni lancio in tempo reale.',
        'url' => route('home'),
        'applicationCategory' => 'GameApplication',
        'operatingSystem' => 'Web',
        'inLanguage' => 'it',
    ];
@endphp
<script type="application/ld+json">{!! json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP) !!}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;500;700;800&family=Alegreya+Sans+SC:wght@500;700&display=swap">
<script>
  // Le parti che entrano al passaggio sono nascoste solo se il codice della pagina parte davvero.
  document.documentElement.classList.add('js');
  setTimeout(function () { if (!document.documentElement.classList.contains('js-ready')) document.documentElement.classList.remove('js'); }, 4000);
</script>
@vite(['resources/css/landing.css', 'resources/js/landing.js'])
</head>
<body>
@php
    // Colori dei dadi del tavolo (gli stessi del form di ingresso): la striscia della scheda.
    $stripe = ['#b3243a', '#2457b3', '#1f8a5b', '#7a3fb0', '#e8dcc0', '#2a2d33', '#d9a72e', '#9fd3e6'];
@endphp

<div class="split" id="inizio">
  <div class="stage-col">
    <div class="stage" id="stage" data-state="welcome" aria-hidden="true">
      <img class="poster" src="{{ asset('images/landing/table-poster.jpg') }}" width="1053" height="1314" alt="" decoding="async">
      <canvas id="c"></canvas>

      <div class="ov ov-code" data-ui>
        <span class="ov-label">Link del tavolo</span>
        <span class="ov-code-text">{{ request()->getHost() }}/t/k7m-p2q-x4n</span>
      </div>
      <div class="ov ov-players" data-ui>
        <span class="ov-label">Al tavolo (3)</span>
        <ul>
          <li style="--i:0"><span class="dot" style="background:#b3243a"></span>Elara</li>
          <li style="--i:1"><span class="dot" style="background:#2457b3"></span>Thorin</li>
          <li style="--i:2"><span class="dot" style="background:#1f8a5b"></span>Mira</li>
        </ul>
      </div>
      <div class="ov ov-toast" data-ui>
        <span class="dot" id="toastDot" style="background:#b3243a"></span>
        <span class="ov-who" id="toastWho">Elara</span>
        <span class="ov-formula" id="toastFormula">1d6 + 1d20</span>
        <span class="ov-total" id="toastTotal">21</span>
      </div>
    </div>
  </div>

  <div class="read">
    <img class="hero-pic" src="{{ asset('images/landing/table-poster.jpg') }}" width="1053" height="1314" alt="La vaschetta di pietra del tavolo, con i dadi di tre giocatori" decoding="async">
    <header class="hero" data-state="welcome">
      <div class="stripe" aria-hidden="true">@foreach ($stripe as $c)<i style="background:{{ $c }}"></i>@endforeach</div>
      <div class="hero-body">
        @if (session('left_room'))
        <p class="notice" role="status">Sei uscito dal tavolo <code>{{ session('left_room') }}</code>. <a href="{{ route('table.show', session('left_room')) }}">Rientra</a></p>
        @endif
        <p class="wordmark reveal">Tavolo dei Dadi</p>
        <h1 class="reveal" style="--d:80ms">Tutti i dadi sullo stesso tavolo</h1>
        <p class="lead reveal" style="--d:160ms">Il tavolo per i dadi del gioco di ruolo: apri il link e tutto il gruppo vede ogni lancio in tempo reale.</p>
        <div class="hero-action reveal" style="--d:240ms">
          @if ($full)
          <p class="notice" role="status">{!! nl2br(e($limitMessage)) !!}</p>
          @else
          <form method="post" action="{{ route('rooms.store') }}">
            @csrf
            <button class="btn" type="submit">Crea un tavolo</button>
          </form>
          @endif
        </div>
        <nav class="card-links reveal" style="--d:320ms" aria-label="Sezioni">
          <a href="#come-funziona">Come funziona</a>
          <a href="#dadi">I dadi</a>
          <a href="#domande">Domande</a>
        </nav>
      </div>
    </header>

    <section class="how" id="come-funziona" aria-labelledby="h-come">
      <h2 id="h-come" class="reveal">Come funziona</h2>

      <article class="step" data-state="code">
        <p class="statement reveal"><strong>Apri un tavolo.</strong> Un clic, nessuna registrazione.</p>
        <p class="body reveal" style="--d:90ms">Ricevi un link come quello di una riunione: tre gruppi di tre caratteri, scelti in modo da non confondere una l con un 1.</p>
        <div class="mini" data-ui><span class="ov-label">Link del tavolo</span><span class="ov-code-text">{{ request()->getHost() }}/t/k7m-p2q-x4n</span></div>
      </article>

      <article class="step" data-state="players">
        <p class="statement reveal"><strong>Poi manda il link.</strong> Chi lo apre sceglie un nickname e il colore dei suoi dadi.</p>
        <p class="body reveal" style="--d:90ms">Ogni giocatore compare nella lista del tavolo con il suo colore, e due giocatori non possono avere lo stesso.</p>
        <div class="mini" data-ui>
          <span class="ov-label">Al tavolo (3)</span>
          <ul><li><span class="dot" style="background:#b3243a"></span>Elara</li><li><span class="dot" style="background:#2457b3"></span>Thorin</li><li><span class="dot" style="background:#1f8a5b"></span>Mira</li></ul>
        </div>
      </article>

      <article class="step" data-state="throw">
        <p class="statement reveal"><strong>Infine lanciate.</strong> Il server decide ogni risultato.</p>
        <p class="body reveal" style="--d:90ms">Scegli i dadi, premi Lancia o la barra spaziatrice. Tutti vedono rotolare gli stessi dadi nello stesso istante, anche quando lanciano in tre insieme.</p>
        <ul class="mini mini-rolls" data-ui>
          <li><span class="dot" style="background:#b3243a"></span><span class="ov-who">Elara</span><span class="ov-formula">1d6 + 1d20</span><span class="ov-total">21</span></li>
          <li><span class="dot" style="background:#2457b3"></span><span class="ov-who">Thorin</span><span class="ov-formula">2d8</span><span class="ov-total">10</span></li>
          <li><span class="dot" style="background:#1f8a5b"></span><span class="ov-who">Mira</span><span class="ov-formula">1d12</span><span class="ov-total">9</span></li>
        </ul>
      </article>
    </section>

    <section class="dice" id="dadi" data-state="dice" aria-labelledby="h-dadi">
      <h2 id="h-dadi" class="reveal">Sei dadi, fino a {{ $maxDice }} per lancio</h2>
      <div class="dice-slot" id="diceSlot"></div>
      <ul class="dlist">
        <li class="reveal" style="--d:0ms"><button type="button" class="dname" data-type="d4" aria-pressed="false">d4</button><p class="dnote">I numeri stanno sui vertici: conta quello in alto.</p></li>
        <li class="reveal" style="--d:50ms"><button type="button" class="dname" data-type="d6" aria-pressed="false">d6</button><p class="dnote">Con i numeri, come gli altri dadi, al posto dei puntini.</p></li>
        <li class="reveal" style="--d:100ms"><button type="button" class="dname" data-type="d8" aria-pressed="false">d8</button><p class="dnote">Le facce opposte sommano sempre 9.</p></li>
        <li class="reveal" style="--d:150ms"><button type="button" class="dname" data-type="d10" aria-pressed="false">d10</button><p class="dnote">Dieci facce a aquilone, con i valori da 1 a 10.</p></li>
        <li class="reveal" style="--d:200ms"><button type="button" class="dname" data-type="d12" aria-pressed="false">d12</button><p class="dnote">Dodici pentagoni, con le facce opposte che sommano 13.</p></li>
        <li class="reveal" style="--d:250ms"><button type="button" class="dname" data-type="d20" aria-pressed="false">d20</button><p class="dnote">Venti facce. Il 6 e il 9 hanno la lineetta sotto, per non confonderli.</p></li>
      </ul>
      <p class="dnote-out" id="dnoteOut" aria-live="polite"></p>
      <p class="body hint reveal">Tocca un dado per lanciarlo sul tavolo.</p>
      <figure class="shot reveal">
        <img src="{{ asset('images/landing/table-30.jpg') }}" width="1400" height="1120" loading="lazy" decoding="async" alt="Il tavolo di pietra con trenta dadi rossi di sei tipi, dopo un solo lancio">
        <figcaption>Trenta dadi in un solo lancio, sul tavolo vero.</figcaption>
      </figure>
    </section>
  </div>
</div>

<section class="feat" id="cosa-vedono" aria-labelledby="h-vedono">
  <div class="feat-field">
    <div class="sheet" data-ui id="sheet">
      <section>
        <h3>Al tavolo (4)</h3>
        <ul class="players">
          <li><span class="dot" style="background:#b3243a"></span><span class="nm">Elara</span></li>
          <li><span class="dot" style="background:#2457b3"></span><span class="nm">Thorin</span></li>
          <li><span class="dot" style="background:#1f8a5b"></span><span class="nm">Mira</span></li>
          <li><span class="dot" id="youDot" style="background:#d9a72e"></span><span class="nm">Tu</span><small>tu</small></li>
        </ul>
      </section>
      <section>
        <h3>I tuoi dadi</h3>
        <div class="mine">
          <div class="die" style="background-color:#d9a72e"><span>20</span></div>
          <p class="die-name">Oro</p>
        </div>
      </section>
      <section>
        <h3>Registro del tavolo</h3>
        <ol class="log">
          <li>
            <span class="dot" style="background:#2457b3"></span>
            <div class="meta"><strong>Thorin</strong><span>2d8 · 21:14:31</span></div>
            <span class="sum">10</span>
            <div class="vals"><span class="chip"><i>d8</i> 3</span><span class="chip"><i>d8</i> 7</span></div>
          </li>
          <li>
            <span class="dot" style="background:#b3243a"></span>
            <div class="meta"><strong>Elara</strong><span>1d6 + 1d20 · 21:14:07</span></div>
            <span class="sum">21</span>
            <div class="vals"><span class="chip"><i>d6</i> 4</span><span class="chip"><i>d20</i> 17</span></div>
          </li>
          <li>
            <span class="dot" style="background:#1f8a5b"></span>
            <div class="meta"><strong>Mira</strong><span>1d12 · 21:13:40</span></div>
            <span class="sum">9</span>
            <div class="vals"><span class="chip"><i>d12</i> 9</span></div>
          </li>
        </ol>
      </section>
    </div>
  </div>

  <div class="feat-read">
    <h2 id="h-vedono" class="reveal">Cosa vedono tutti</h2>

    <article class="block">
      <p class="statement reveal">Il server decide ogni risultato.</p>
      <p class="body reveal" style="--d:90ms">Il browser di chi lancia non propone mai un valore: lo riceve e lo mostra. Nessuno può barare, nemmeno chi lancia.</p>
    </article>

    <article class="block">
      <p class="statement reveal">Tutti vedono lo stesso lancio.</p>
      <p class="body reveal" style="--d:90ms">Stessi dadi, stessa traiettoria, stesso istante. I lanci di più giocatori convivono sul tavolo.</p>
    </article>

    <article class="block">
      <p class="statement reveal">Il tuo colore, i tuoi dadi.</p>
      <p class="body reveal" style="--d:90ms">Otto colori e sei finiture glitterate. Un colore appartiene a un solo giocatore per tavolo.</p>
      <div class="mine mine-inline" data-ui><div class="die" style="background-color:#d9a72e"><span>20</span></div><p class="die-name">Oro</p></div>
      <div class="swatches reveal" id="swatches" style="--d:160ms" role="group" aria-label="Colore dei dadi"></div>
    </article>

    <article class="block">
      <p class="statement reveal">Il registro tiene il conto.</p>
      <p class="body reveal" style="--d:90ms">Chi entra a partita iniziata trova gli ultimi {{ $historyLimit }} lanci. Un clic su un tuo dado fermo ne lancia uno nuovo dello stesso tipo.</p>
    </article>
  </div>
</section>

<section class="faq" id="domande" aria-labelledby="h-domande">
  <h2 id="h-domande" class="reveal">Domande</h2>
  <div class="faq-text">
    <p class="reveal"><strong>Serve registrarsi?</strong> No. Chi entra sceglie un nickname e il colore dei suoi dadi.</p>
    <p class="reveal"><strong>Quanto dura un tavolo?</strong> Resta aperto finché lo usate. Dopo {{ $expire }} senza attività il link smette di funzionare.</p>
    <p class="reveal"><strong>Quanti possono giocare?</strong> @if ($maxParticipants > 0)Fino a {{ $maxParticipants }} giocatori per tavolo.@else Non c'è un limite al numero di giocatori.@endif</p>
    <p class="reveal"><strong>Si può barare?</strong> No. Il valore di ogni dado lo decide il server, non il browser di chi lancia.</p>
    <p class="reveal"><strong>Quali dati conservate?</strong> Il nickname, il colore e i lanci del tavolo, @if ($retentionDays > 0)per {{ $retentionDays }} {{ $retentionDays === 1 ? 'giorno' : 'giorni' }} dopo la scadenza.@else fino alla scadenza.@endif Il sito usa solo il cookie tecnico della sessione.</p>
    <p class="reveal"><strong>Funziona sul telefono?</strong> Sì, su ogni browser recente con WebGL.</p>
    <p class="reveal"><strong>Posso uscire e rientrare?</strong> Il bottone Esci ti toglie dalla lista. Per rientrare basta il link del tavolo.</p>
  </div>
</section>

<section class="cta" id="crea" aria-labelledby="h-crea">
  <div class="cta-copy">
    <h2 id="h-crea" class="reveal">Aprite il tavolo</h2>
    <p class="lead reveal" style="--d:90ms">Il link arriva subito, e i dadi sono già sul tavolo.</p>
  </div>
  @if ($full)
  <div class="dialog reveal" data-ui style="--d:160ms">
    <p class="dlg-title">Tavoli occupati</p>
    <p class="dlg-text">{!! nl2br(e($limitMessage)) !!}</p>
  </div>
  @else
  <form class="dialog reveal" data-ui method="post" action="{{ route('rooms.store') }}" style="--d:160ms">
    @csrf
    <p class="dlg-title">Nuovo tavolo</p>
    <p class="dlg-text">Un clic, nessun account. Poi mandi il link ai giocatori.</p>
    <button class="btn" type="submit">Crea un tavolo</button>
  </form>
  @endif
</section>

<footer class="foot">
  <p>Tavolo dei Dadi, per il gioco di ruolo online</p>
  <nav aria-label="Piè di pagina">
    <a href="#come-funziona">Come funziona</a>
    <a href="#dadi">I dadi</a>
    <a href="#domande">Domande</a>
  </nav>
  <p>2026</p>
</footer>
</body>
</html>
