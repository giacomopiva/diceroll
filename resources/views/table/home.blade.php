@extends('table.layout')

@section('body')
<body class="plain">
<main class="card">
  <h1 class="brand">Tavolo dei Dadi</h1>
  @if (session('left_room'))
  <p class="notice" role="status">Sei uscito dal tavolo <code>{{ session('left_room') }}</code>. <a href="{{ route('table.show', session('left_room')) }}">Rientra</a></p>
  @endif
  <p class="note">Un tavolo virtuale per i dadi del gioco di ruolo. Crei un tavolo, mandi il link agli altri e vedete tutti gli stessi lanci in tempo reale. Niente account: serve solo un nickname.</p>
  @if ($full)
  <p class="notice" role="status">{!! nl2br(e($limitMessage)) !!}</p>
  @else
  <form method="post" action="{{ route('rooms.store') }}">
    @csrf
    <button class="roll" type="submit">Crea un tavolo</button>
  </form>
  @endif
</main>
</body>
@endsection
