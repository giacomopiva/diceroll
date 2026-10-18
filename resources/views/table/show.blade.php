@extends('table.layout')

@push('head')
@vite(['resources/js/table.js'])
@endpush

@section('body')
<body data-debug="{{ app()->environment('local') ? '1' : '0' }}" data-room-url="{{ route('table.show', $room) }}" data-name="{{ $participant->nickname }}" data-color="{{ $participant->color }}">
<div class="app">
  <header class="bar">
    <div class="brand">Tavolo dei Dadi <small>tavolo {{ $room->code }}</small></div>
    <div class="room">
      <span>Link del tavolo</span>
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
      <div class="who"><span class="dot" style="background:{{ $participant->color }}"></span> {{ $participant->nickname }}</div>
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
      <p class="note">Per ora il "server" è ancora simulato nel browser con <code>crypto.getRandomValues</code>. Dalla tappa 4 i valori e il seed arrivano da Laravel. La spunta verde conferma che la faccia in alto coincide col valore deciso.</p>
    </section>

    <section>
      <h2>Registro del tavolo</h2>
      <ol class="log" id="log"><li class="empty" style="display:block">Nessun lancio ancora.</li></ol>
    </section>
  </aside>
</div>
</body>
@endsection
