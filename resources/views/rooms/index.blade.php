@extends('layouts.admin.app')

@php $admin = $scope === 'admin'; @endphp

@section('content')

<div class="page-header d-print-none">
    <div class="container-xl">
        <div class="row g-2 align-items-center">
            <div class="col">
                <div class="page-pretitle">{{ $admin ? 'Admin' : 'Area utente' }}</div>
                <h2 class="page-title">Tavoli</h2>
            </div>
            <div class="col-auto ms-auto d-print-none d-flex gap-2">
                <div class="btn-group" role="group" aria-label="Filtro per stato">
                    <a href="{{ route($scope.'.room.index', ['stato' => 'tutti']) }}" class="btn {{ $status === 'tutti' ? 'btn-primary' : 'btn-outline-primary' }}">Tutti</a>
                    <a href="{{ route($scope.'.room.index') }}" class="btn {{ $status === 'aperti' ? 'btn-primary' : 'btn-outline-primary' }}">Aperti ({{ $counts['aperti'] }})</a>
                    <a href="{{ route($scope.'.room.index', ['stato' => 'scaduti']) }}" class="btn {{ $status === 'scaduti' ? 'btn-primary' : 'btn-outline-primary' }}">Scaduti ({{ $counts['scaduti'] }})</a>
                </div>
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
    </div>
</div>

<div class="page-body">
    <div class="container-xl">
        @unless ($canCreate)
            <div class="alert alert-secondary" role="alert">{{ $limitMessage }}</div>
        @endunless
        @if (session('deleted'))
            <div class="alert alert-success" role="alert">Tavolo <span class="font-monospace">{{ session('deleted') }}</span> eliminato.</div>
        @endif
        <div class="card">
            <div class="table-responsive">
                <table class="table table-vcenter card-table">
                    <thead>
                        <tr><th>Codice</th>@if ($admin)<th>Creato da</th>@endif<th>Stato</th><th>Giocatori</th><th class="text-end">Lanci</th><th>Creato</th><th>Attivo da</th><th>Ultimo lancio</th><th>Inattivo da</th><th></th></tr>
                    </thead>
                    <tbody>
                        @forelse ($rooms as $room)
                            <tr>
                                <td><a href="{{ route($scope.'.room.show', $room) }}" class="font-monospace">{{ $room->code }}</a></td>
                                @if ($admin)<td>{{ $room->user?->name ?? 'guest' }}</td>@endif
                                <td>
                                    @if ($room->isExpired())
                                        <span class="badge bg-secondary-lt text-secondary">Scaduto</span>
                                    @else
                                        <span class="badge bg-green-lt text-green">Aperto</span>
                                    @endif
                                </td>
                                <td>
                                    @if ($room->online_count > 0)<span class="badge bg-green-lt text-green">{{ $room->online_count }} online</span>@endif
                                    <span class="text-secondary small">{{ $room->participants_count }} in totale</span>
                                </td>
                                <td class="text-end">{{ $room->rolls_count }}</td>
                                <td class="text-secondary">{{ $room->created_at->locale('it')->isoFormat('D MMM YYYY HH:mm') }}</td>
                                <td>{{ $room->activeFor() }}</td>
                                <td class="text-secondary">{{ $room->lastRollAt()?->locale('it')->isoFormat('D MMM HH:mm') ?? '—' }}</td>
                                <td>{{ $room->idleFor() }}@unless ($room->lastRollAt()) <span class="text-secondary small">(nessun lancio)</span>@endunless</td>
                                <td class="text-end text-nowrap">
                                    @unless ($room->isExpired())
                                        <button type="button" class="btn btn-sm" data-copy="{{ route('table.show', $room) }}" title="Copia il link del tavolo"><i class="ti ti-copy"></i></button>
                                        <a href="{{ route('table.show', $room) }}" class="btn btn-sm" target="_blank" rel="noopener" title="Apri il tavolo"><i class="ti ti-external-link"></i></a>
                                    @endunless
                                    <form method="post" action="{{ route($scope.'.room.destroy', $room) }}" class="d-inline"
                                          onsubmit="return confirm('Eliminare il tavolo {{ $room->code }} con partecipanti e lanci? L\'azione è irreversibile.')">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-outline-danger" title="Elimina il tavolo"><i class="ti ti-trash"></i></button>
                                    </form>
                                </td>
                            </tr>
                        @empty
                            <tr><td colspan="{{ $admin ? 10 : 9 }}" class="text-center text-secondary py-4">Nessun tavolo.</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
            @if ($rooms->hasPages())
                <div class="card-footer d-flex justify-content-center">{{ $rooms->links('pagination::bootstrap-5') }}</div>
            @endif
        </div>
        <p class="text-secondary small mt-3">
            @inject('settings', 'App\Services\SettingsService')
            @if ($admin)
                I tavoli dei guest scadono dopo {{ $settings->expireLabel() }} senza attività (quelli degli utenti seguono la scadenza scelta dall'utente) e vengono cancellati,
                con partecipanti e lanci, {{ config('tavolo.retention_days') }} giorni dopo la scadenza.
            @else
                I tavoli scadono dopo il periodo di inattività impostato nelle Impostazioni e vengono cancellati,
                con partecipanti e lanci, {{ config('tavolo.retention_days') }} giorni dopo la scadenza.
            @endif
        </p>
    </div>
</div>

@endsection

@section('script')
<script>
    // Copia il link del tavolo negli appunti.
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-copy]');
        if (!btn) return;
        const icon = btn.querySelector('i');
        const done = () => { icon.className = 'ti ti-check text-green'; setTimeout(() => { icon.className = 'ti ti-copy'; }, 1600); };
        const fallback = () => window.prompt('Copia il link:', btn.dataset.copy);
        try { navigator.clipboard.writeText(btn.dataset.copy).then(done, fallback); } catch (err) { fallback(); }
    });
</script>
@endsection
