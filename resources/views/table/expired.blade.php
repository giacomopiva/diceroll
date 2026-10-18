@extends('table.layout')

@section('title', 'Tavolo scaduto · Tavolo dei Dadi')

@section('body')
<body class="plain">
<main class="card">
  <h1 class="brand">Tavolo scaduto</h1>
  <p class="note">Il tavolo <code>{{ $room->code }}</code> è rimasto fermo per più di {{ config('tavolo.expire_after_hours') }} ore e non è più disponibile. Puoi aprirne uno nuovo e mandare il link agli altri.</p>
  <form method="post" action="{{ route('rooms.store') }}">
    @csrf
    <button class="roll" type="submit">Crea un tavolo</button>
  </form>
</main>
</body>
@endsection
