@extends('table.layout')

@push('head')
@vite(['resources/js/table.js'])
@endpush

@section('body')
<body data-debug="{{ app()->environment('local') ? '1' : '0' }}" data-room="{{ $room->code }}" data-room-url="{{ route('table.show', $room) }}" data-rolls-url="{{ route('table.rolls.store', $room) }}" data-heartbeat-url="{{ route('table.heartbeat', $room) }}" data-leave-url="{{ route('table.leave', $room) }}" data-player-id="{{ $participant->id }}" data-name="{{ $participant->nickname }}" data-color="{{ $participant->color }}">
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
      <h2>Al tavolo <span id="playersCount"></span></h2>
      <ul class="players" id="players"></ul>
    </section>

    <section>
      <h2>Dadi da lanciare</h2>
      <div class="pool" id="pool"></div>
      <div class="formula" id="formula"></div>
      <button class="roll" id="rollBtn" type="button">Lancia <kbd>Spazio</kbd></button>
    </section>

    <section>
      <h2>Opzioni</h2>
      <div class="row">
        @if (app()->environment('local'))
        <button class="btn" id="stressBtn" type="button">Stress test: 30 dadi</button>
        @endif
        <button class="btn" id="soundBtn" type="button" aria-pressed="true">Suono: sì</button>
      </div>
      <p class="note">Il risultato di ogni lancio lo decide il server. La spunta verde nel registro conferma che la faccia in alto del dado disegnato coincide col valore del server.</p>
    </section>

    <section>
      <h2>Registro del tavolo</h2>
      <ol class="log" id="log"><li class="empty" style="display:block">Nessun lancio ancora.</li></ol>
    </section>
  </aside>
</div>
<script type="application/json" id="presence">@json($players, JSON_HEX_TAG | JSON_HEX_AMP)</script>
<script type="application/json" id="history">@json($history, JSON_HEX_TAG | JSON_HEX_AMP)</script>
</body>
@endsection
