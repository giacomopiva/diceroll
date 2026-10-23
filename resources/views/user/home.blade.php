@extends('layouts.admin.app')

@section('content')

{{-- ── Page header ────────────────────────────────── --}}
<div class="page-header d-print-none">
    <div class="container-xl">
        <div class="row g-2 align-items-center">
            <div class="col">
                <div class="page-pretitle">Area utente</div>
                <h2 class="page-title" id="vue-title">Home</h2>
            </div>
        </div>
    </div>
</div>

{{-- ── Page body ───────────────────────────────────── --}}
<div class="page-body" id="app">
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title"><i class="ti ti-dice-5 me-2 text-secondary"></i>I tuoi tavoli aperti</h3>
                        <div class="card-actions">
                            @if ($canCreate)
                                <form action="{{ route('rooms.store') }}" method="POST" target="_blank" class="m-0">
                                    @csrf
                                    <button type="submit" class="btn btn-primary"><i class="ti ti-plus me-1"></i>Apri un nuovo tavolo</button>
                                </form>
                            @else
                                <button type="button" class="btn btn-primary" disabled><i class="ti ti-plus me-1"></i>Apri un nuovo tavolo</button>
                            @endif
                        </div>
                    </div>
                    @unless ($canCreate)
                        <div class="card-body border-bottom text-secondary">{{ $limitMessage }}</div>
                    @endunless
                    @if ($rooms->isEmpty())
                        <div class="card-body text-secondary">Non hai tavoli aperti. Aprine uno e manda il link agli altri giocatori.</div>
                    @else
                        <div class="table-responsive">
                            <table class="table table-vcenter card-table">
                                <thead>
                                    <tr><th>Tavolo</th><th>Online</th><th>Lanci</th><th>Ultima attività</th><th>Scade tra</th><th></th></tr>
                                </thead>
                                <tbody>
                                    @foreach ($rooms as $room)
                                        <tr>
                                            <td><code>{{ $room->code }}</code></td>
                                            <td>{{ $room->online_count }}</td>
                                            <td>{{ $room->rolls_count }}</td>
                                            <td class="text-secondary">{{ $room->last_activity_at->diffForHumans() }}</td>
                                            <td class="text-secondary">{{ \App\Models\Room::formatMinutes((int) now()->diffInMinutes($room->last_activity_at->copy()->addHours($room->expireHours()), false)) }}</td>
                                            <td class="text-end text-nowrap">
                                                <button type="button" class="btn btn-sm" data-copy="{{ route('table.show', $room) }}"><i class="ti ti-copy me-1"></i><span>Copia link</span></button>
                                                <a href="{{ route('table.show', $room) }}" class="btn btn-sm" target="_blank" rel="noopener">Apri</a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

@section('script')
<script>
    // Copia il link del tavolo negli appunti.
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-copy]');
        if (!btn) return;
        const label = btn.querySelector('span');
        const done = () => { label.textContent = 'Copiato'; setTimeout(() => { label.textContent = 'Copia link'; }, 1600); };
        const fallback = () => window.prompt('Copia il link:', btn.dataset.copy);
        try { navigator.clipboard.writeText(btn.dataset.copy).then(done, fallback); } catch (err) { fallback(); }
    });
</script>
@endsection
