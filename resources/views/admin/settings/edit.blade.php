@extends('layouts.admin.app')

@section('content')

<div class="page-header d-print-none">
    <div class="container-xl">
        <div class="row g-2 align-items-center">
            <div class="col">
                <div class="page-pretitle">Sistema</div>
                <h2 class="page-title">Impostazioni</h2>
            </div>
        </div>
    </div>
</div>

<div class="page-body">
    <div class="container-xl">
        @if (session('saved'))
            <div class="alert alert-success" role="alert">Impostazioni salvate.</div>
        @endif

        <form action="{{ route('admin.settings.update') }}" method="POST">
            @csrf
            @method('PUT')

            <div class="row row-cards">
                <div class="col-lg-6">
                    <div class="card rounded-3 overflow-hidden">
                        <div class="card-header">
                            <h3 class="card-title"><i class="ti ti-clock-hour-4 me-2 text-secondary"></i>Durata e storico</h3>
                        </div>
                        <div class="card-body">
                            <x-admin.input-range
                                :name="'expire_after_hours'"
                                :label="'Scadenza del tavolo'"
                                :value="$expireHours"
                                :min="1" :max="24" :unit="'ore'" :unit-one="'ora'" :required="true"
                                :description="'Un tavolo senza attività per questo tempo non è più raggiungibile. Vale subito anche per i tavoli già aperti: abbassandola, quelli fermi da più tempo scadono adesso. I dati restano '.config('tavolo.retention_days').' giorni per le statistiche.'">
                                <div class="small mt-1" id="expireImpact" aria-live="polite"></div>
                            </x-admin.input-range>

                            <x-admin.input-range
                                :name="'history_limit'"
                                :label="'Lanci nello storico'"
                                :value="$historyLimit"
                                :min="10" :max="100" :unit="'lanci'" :required="true"
                                :description="'Quanti lanci recenti vede chi entra in un tavolo, e quanti ne tiene il registro.'" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card rounded-3 overflow-hidden">
                        <div class="card-header">
                            <h3 class="card-title"><i class="ti ti-adjustments me-2 text-secondary"></i>Limiti e messaggi</h3>
                        </div>
                        <div class="card-body">
                            <x-admin.input-number
                                :name="'max_rooms'"
                                :label="'Tavoli aperti insieme'"
                                :value="$maxRooms"
                                :description="'0 = nessun limite. Contano i tavoli non scaduti (ora aperti: '.$openRooms.').'"
                                :min="0" :required="true" />

                            <x-admin.input-number
                                :name="'max_participants'"
                                :label="'Giocatori per tavolo'"
                                :value="$maxParticipants"
                                :description="'0 = nessun limite. Contano i giocatori online; chi è già dentro non viene espulso.'"
                                :min="0" :required="true" />

                            <x-admin.textarea
                                :name="'rooms_limit_message'"
                                :label="'Messaggio a tavoli esauriti'"
                                :value="$message"
                                :description="'Mostrato nella home al posto del pulsante «Crea un tavolo». Se lo svuoti torna il testo predefinito.'"
                                :rows="3" />

                            <x-admin.textarea
                                :name="'room_full_message'"
                                :label="'Messaggio a tavolo pieno'"
                                :value="$fullMessage"
                                :description="'Mostrato a chi prova a entrare in un tavolo al completo. :max diventa il numero di giocatori. Se lo svuoti torna il testo predefinito.'"
                                :rows="3" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-3">
                <button type="submit" class="btn btn-primary">Salva</button>
            </div>
        </form>
    </div>
</div>

<script type="application/json" id="openRoomsIdleHours">@json($openRoomsIdleHours)</script>
<script>
    // Quanti tavoli aperti scadrebbero subito con la scadenza scelta sullo slider.
    (() => {
        const idle = JSON.parse(document.getElementById('openRoomsIdleHours').textContent);
        const slider = document.getElementById('expire_after_hours');
        const out = document.getElementById('expireImpact');
        const show = () => {
            const n = idle.filter((h) => h >= Number(slider.value)).length;
            out.className = 'small mt-1 ' + (n ? 'text-warning' : 'text-secondary');
            out.textContent = n === 0 ? 'Con questo valore nessun tavolo aperto scade subito.'
                : n === 1 ? 'Con questo valore 1 tavolo aperto scadrebbe subito.'
                : `Con questo valore ${n} tavoli aperti scadrebbero subito.`;
        };
        slider.addEventListener('input', show);
        show();
    })();
</script>

@endsection
