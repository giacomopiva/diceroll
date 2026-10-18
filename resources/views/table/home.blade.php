@extends('table.layout')

@section('body')
<body class="plain">
<main class="card">
  <h1 class="brand">Tavolo dei Dadi</h1>
  <p class="note">Un tavolo virtuale per i dadi del gioco di ruolo. Crei un tavolo, mandi il link agli altri e vedete tutti gli stessi lanci in tempo reale. Niente account: serve solo un nickname.</p>
  <form method="post" action="{{ route('rooms.store') }}">
    @csrf
    <button class="roll" type="submit">Crea un tavolo</button>
  </form>
</main>
</body>
@endsection
