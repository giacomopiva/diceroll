@extends('table.layout')

@section('title', 'Entra al tavolo · Tavolo dei Dadi')

@push('head')
@vite(['resources/js/join.js'])
@endpush

@section('body')
<body class="plain">
<main class="card">
  <h1 class="brand">Tavolo dei Dadi</h1>
  <p class="note">Stai entrando nel tavolo <code>{{ $room->code }}</code>. Scegli come ti chiamano gli altri e il colore dei tuoi dadi.</p>
  <form method="post" action="{{ route('table.join', $room) }}" id="joinForm" class="stack">
    @csrf
    <label class="field" for="nick">Nickname
      <input type="text" id="nick" name="nickname" maxlength="20" value="{{ old('nickname') }}" autocomplete="off" required autofocus>
    </label>
    @error('nickname')<p class="err">{{ $message }}</p>@enderror

    <div class="field" style="display:flex;flex-direction:column;gap:6px;font-size:.9rem;color:var(--muted)">
      Colore dei dadi
      <div class="swatches" id="swatches" data-initial="{{ old('color') }}" data-taken="{{ json_encode($taken) }}"></div>
      <input type="hidden" name="color" id="color" value="{{ old('color') }}">
    </div>
    @error('color')<p class="err">{{ $message }}</p>@enderror

    <button class="roll" type="submit">Entra al tavolo</button>
  </form>
</main>
</body>
@endsection
