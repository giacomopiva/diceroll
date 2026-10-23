@extends('layouts.admin.app')

@section('content')

<div class="page-header d-print-none">
    <div class="container-xl">
        <div class="row g-2 align-items-center">
            <div class="col">
                <div class="page-pretitle">Area utente</div>
                <h2 class="page-title">Impostazioni dei tavoli</h2>
            </div>
        </div>
    </div>
</div>

<div class="page-body">
    <div class="container-xl">
        @if (session('saved'))
            <div class="alert alert-success" role="alert">Impostazioni salvate.</div>
        @endif
        @if (session('reset'))
            <div class="alert alert-success" role="alert">Sono tornate le regole predefinite.</div>
        @endif

        <form action="{{ route('user.settings.update') }}" method="POST">
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
                                :name="'table_expire_hours'"
                                :label="'Scadenza del tavolo'"
                                :value="$expireHours"
                                :min="1" :max="24" :unit="'ore'" :unit-one="'ora'" :required="true"
                                :description="'Un tavolo senza attività per questo tempo non è più raggiungibile.'" />

                            <x-admin.input-range
                                :name="'table_history_limit'"
                                :label="'Lanci nello storico'"
                                :value="$historyLimit"
                                :min="10" :max="100" :unit="'lanci'" :required="true"
                                :description="'Quanti lanci recenti vede chi entra nel tuo tavolo, e quanti ne tiene il registro.'" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card rounded-3 overflow-hidden">
                        <div class="card-header">
                            <h3 class="card-title"><i class="ti ti-users me-2 text-secondary"></i>Giocatori</h3>
                        </div>
                        <div class="card-body">
                            <x-admin.input-range
                                :name="'table_max_participants'"
                                :label="'Giocatori per tavolo'"
                                :value="$maxParticipants"
                                :min="2" :max="10" :unit="'giocatori'" :required="true"
                                :description="'Contano i giocatori online; chi è già dentro non viene espulso.'" />

                            <x-admin.textarea
                                :name="'table_full_message'"
                                :label="'Messaggio a tavolo pieno'"
                                :value="$fullMessage"
                                :description="'Mostrato a chi prova a entrare in un tavolo al completo. :max diventa il numero di giocatori. Se lo svuoti o lo lasci uguale, segue il testo predefinito del sito.'"
                                :rows="3" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-3 d-flex gap-2">
                <button type="submit" class="btn btn-primary">Salva</button>
                @if ($customized)
                    <button type="submit" form="reset-settings" class="btn btn-outline-secondary">Torna ai valori predefiniti</button>
                @endif
            </div>
        </form>

        <form id="reset-settings" action="{{ route('user.settings.reset') }}" method="POST">
            @csrf
            @method('DELETE')
        </form>
    </div>
</div>

@endsection
