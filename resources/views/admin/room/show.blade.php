@extends('layouts.admin.app')

@section('content')

<div class="page-header d-print-none">
    <div class="container-xl">
        <div class="row g-2 align-items-center">
            <div class="col">
                <div class="page-pretitle"><a href="{{ route('admin.room.index') }}">Tavoli</a></div>
                <h2 class="page-title font-monospace">
                    {{ $room->code }}
                    @if ($room->isExpired())
                        <span class="badge bg-secondary-lt text-secondary ms-2">Scaduto</span>
                    @else
                        <span class="badge bg-green-lt text-green ms-2">Aperto</span>
                    @endif
                </h2>
            </div>
            <div class="col-auto ms-auto d-print-none">
                <form method="post" action="{{ route('admin.room.destroy', $room) }}" class="d-inline"
                      onsubmit="return confirm('Eliminare il tavolo {{ $room->code }} con partecipanti e lanci? L\'azione è irreversibile.')">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-outline-danger"><i class="ti ti-trash me-1"></i>Elimina</button>
                </form>
                <a href="{{ route('admin.room.index') }}" class="btn btn-outline-primary"><i class="ti ti-arrow-left me-1"></i>Tutti i tavoli</a>
            </div>
        </div>
    </div>
</div>

<div class="page-body">
    <div class="container-xl">
        <div class="row row-cards">

            <div class="col-lg-4">
                <div class="card mb-3">
                    <div class="card-header"><h3 class="card-title">Dettagli</h3></div>
                    <div class="card-body">
                        <dl class="row mb-0">
                            <dt class="col-5">Creato</dt>
                            <dd class="col-7">{{ $room->created_at->locale('it')->isoFormat('D MMM YYYY HH:mm') }}</dd>
                            <dt class="col-5">Ultima attività</dt>
                            <dd class="col-7">{{ $room->last_activity_at?->locale('it')->isoFormat('D MMM YYYY HH:mm') ?? '—' }}</dd>
                            <dt class="col-5">Attivo da</dt>
                            <dd class="col-7">{{ $room->activeFor() }}</dd>
                            <dt class="col-5">Ultimo lancio</dt>
                            <dd class="col-7">{{ $room->lastRollAt()?->locale('it')->isoFormat('D MMM YYYY HH:mm') ?? '—' }}</dd>
                            <dt class="col-5">Inattivo da</dt>
                            <dd class="col-7">{{ $room->idleFor() }}@unless ($room->lastRollAt()) <span class="text-secondary small">(nessun lancio)</span>@endunless</dd>
                            <dt class="col-5">Lanci</dt>
                            <dd class="col-7">{{ $rolls->total() }}</dd>
                            <dt class="col-5">Giocatori</dt>
                            <dd class="col-7">{{ $participants->count() }}</dd>
                        </dl>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header"><h3 class="card-title">Giocatori</h3></div>
                    <div class="list-group list-group-flush">
                        @forelse ($participants as $p)
                            <div class="list-group-item d-flex align-items-center">
                                <span class="badge me-2" style="background:{{ $p->color }};width:.9rem;height:.9rem;padding:0;border-radius:50%"></span>
                                <div class="flex-fill">
                                    <div class="fw-bold">{{ $p->nickname }}</div>
                                    <div class="text-secondary small">{{ $p->rolls_count }} lanci · visto {{ $p->last_seen_at?->locale('it')->diffForHumans() ?? 'mai' }}</div>
                                </div>
                                @if ($p->online && $p->last_seen_at?->gte(now()->subSeconds(\App\Services\PresenceService::STALE_SECONDS)))
                                    <span class="badge bg-green-lt text-green">online</span>
                                @endif
                            </div>
                        @empty
                            <div class="list-group-item text-secondary">Nessun giocatore è entrato.</div>
                        @endforelse
                    </div>
                </div>
            </div>

            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header"><h3 class="card-title">Storico dei lanci</h3></div>
                    <div class="table-responsive">
                        <table class="table table-vcenter card-table">
                            <thead><tr><th>Quando</th><th>Giocatore</th><th>Lancio</th><th>Valori</th><th class="text-end">Totale</th></tr></thead>
                            <tbody>
                                @forelse ($rolls as $roll)
                                    <tr>
                                        <td class="text-secondary text-nowrap">{{ $roll->created_at->locale('it')->isoFormat('D MMM HH:mm:ss') }}</td>
                                        <td>
                                            <span class="badge me-1" style="background:{{ $roll->participant->color }};width:.8rem;height:.8rem;padding:0;border-radius:50%;vertical-align:-1px"></span>
                                            {{ $roll->participant->nickname }}
                                        </td>
                                        <td class="font-monospace small">
                                            {{ $roll->formula() }}
                                            @if ($roll->reroll_of_id)
                                                <span class="badge bg-azure-lt ms-1">rilancio di #{{ $roll->reroll_of_id }}</span>
                                            @endif
                                        </td>
                                        <td>
                                            @foreach ($roll->dice as $i => $type)
                                                <span class="badge bg-secondary-lt text-secondary font-monospace">{{ $type }}: {{ $roll->values[$i] }}</span>
                                            @endforeach
                                        </td>
                                        <td class="text-end fw-bold">{{ $roll->total }}</td>
                                    </tr>
                                @empty
                                    <tr><td colspan="5" class="text-center text-secondary py-4">Nessun lancio in questo tavolo.</td></tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                    @if ($rolls->hasPages())
                        <div class="card-footer d-flex justify-content-center">{{ $rolls->links('pagination::bootstrap-5') }}</div>
                    @endif
                </div>
            </div>

        </div>
    </div>
</div>

@endsection
