<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Tavolo dei Dadi</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;500;700;800&family=Alegreya+Sans+SC:wght@500;700&family=IBM+Plex+Mono:wght@400;500&display=swap">
@vite(['resources/css/table.css', 'resources/js/table.js'])
</head>
<body data-debug="{{ app()->environment('local') ? '1' : '0' }}">
<div class="app">
  <header class="bar">
    <div class="brand">Tavolo dei Dadi <small>tappa 2: lancio locale</small></div>
    <div class="room">
      <span>Link stanza (esempio)</span>
      <code id="roomUrl">…</code>
      <button class="btn" id="copyRoom" type="button">Copia</button>
    </div>
  </header>

  <main class="stage" id="stage">
    <canvas id="c" aria-label="Tavolo 3D con i dadi lanciati"></canvas>
    <div class="hud" id="hud" hidden>avvio…</div>
    <div class="toast" id="toast" hidden></div>
    <div class="loading" id="loading">Carico il tavolo…</div>
  </main>

  <aside class="sheet">
    <section>
      <h2>Giocatore</h2>
      <label class="field" for="nick">Nickname
        <input type="text" id="nick" maxlength="20" value="Giacomo" autocomplete="off">
      </label>
      <div class="field" style="display:flex;flex-direction:column;gap:6px;font-size:.9rem;color:var(--muted)">
        Colore dei dadi
        <div class="swatches" id="swatches"></div>
      </div>
    </section>

    <section>
      <h2>Dadi da lanciare</h2>
      <div class="pool" id="pool"></div>
      <div class="formula" id="formula"></div>
      <button class="roll" id="rollBtn" type="button">Lancia <kbd>Spazio</kbd></button>
    </section>

    <section>
      <h2>Prove</h2>
      <div class="row">
        <button class="btn" id="remoteBtn" type="button">Lancio di Elara (simulato)</button>
        <button class="btn" id="stressBtn" type="button">Stress test: 30 dadi</button>
        <button class="btn" id="soundBtn" type="button" aria-pressed="true">Suono: sì</button>
      </div>
      <p class="note">In questa tappa il "server" è ancora simulato nel browser con <code>crypto.getRandomValues</code>. Dalla tappa 4 i valori e il seed arrivano da Laravel. La spunta verde conferma che la faccia in alto coincide col valore deciso.</p>
    </section>

    <section>
      <h2>Registro del tavolo</h2>
      <ol class="log" id="log"><li class="empty" style="display:block">Nessun lancio ancora.</li></ol>
    </section>
  </aside>
</div>
</body>
</html>
