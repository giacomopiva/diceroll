@extends('layouts.admin.app')

@section('content')

<div class="page-header d-print-none">
    <div class="container-xl">
        <div class="row g-2 align-items-center">
            <div class="col">
                <div class="page-pretitle">Admin</div>
                <h2 class="page-title">Tavoli</h2>
            </div>
            <div class="col-auto ms-auto d-print-none">
                <div class="btn-group" role="group" aria-label="Filtro per stato">
                    <a href="{{ route('admin.room.index') }}" class="btn {{ $status === 'tutti' ? 'btn-primary' : 'btn-outline-primary' }}">Tutti</a>
                    <a href="{{ route('admin.room.index', ['stato' => 'aperti']) }}" class="btn {{ $status === 'aperti' ? 'btn-primary' : 'btn-outline-primary' }}">Aperti ({{ $counts['aperti'] }})</a>
                    <a href="{{ route('admin.room.index', ['stato' => 'scaduti']) }}" class="btn {{ $status === 'scaduti' ? 'btn-primary' : 'btn-outline-primary' }}">Scaduti ({{ $counts['scaduti'] }})</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="page-body">
    <div class="container-xl">
        <div class="card">
            <div class="table-responsive">
                <table class="table table-vcenter card-table">
                    <thead>
                        <tr><th>Codice</th><th>Stato</th><th>Giocatori</th><th class="text-end">Lanci</th><th>Creato</th><th>Ultima attività</th></tr>
                    </thead>
                    <tbody>
                        @forelse ($rooms as $room)
                            <tr>
                                <td><a href="{{ route('admin.room.show', $room) }}" class="font-monospace">{{ $room->code }}</a></td>
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
                                <td class="text-secondary">{{ $room->last_activity_at?->locale('it')->diffForHumans() ?? '—' }}</td>
                            </tr>
                        @empty
                            <tr><td colspan="6" class="text-center text-secondary py-4">Nessun tavolo.</td></tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
            @if ($rooms->hasPages())
                <div class="card-footer d-flex justify-content-center">{{ $rooms->links('pagination::bootstrap-5') }}</div>
            @endif
        </div>
        <p class="text-secondary small mt-3">
            I tavoli scadono dopo {{ config('tavolo.expire_after_hours') }} ore senza attività e vengono cancellati,
            con partecipanti e lanci, {{ config('tavolo.retention_days') }} giorni dopo la scadenza.
        </p>
    </div>
</div>

@endsection
