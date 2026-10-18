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
        <div class="row row-cards">
            <div class="col-lg-6">
                <div class="card rounded-3 overflow-hidden">
                    <div class="card-header">
                        <h3 class="card-title"><i class="ti ti-adjustments me-2 text-secondary"></i>Limiti dei tavoli</h3>
                    </div>
                    <div class="card-body">
                        @if (session('saved'))
                            <div class="alert alert-success" role="alert">Impostazioni salvate.</div>
                        @endif

                        <form action="{{ route('admin.settings.update') }}" method="POST">
                            @csrf
                            @method('PUT')

                            <x-admin.input-number
                                :name="'max_rooms'"
                                :label="'Tavoli apribili contemporaneamente'"
                                :value="$maxRooms"
                                :description="'Contano i tavoli non scaduti (ora aperti: '.$openRooms.'). Raggiunto il numero, nessuno può crearne altri.'"
                                :min="1" :max="100" :required="true" />

                            <x-admin.input-number
                                :name="'max_participants'"
                                :label="'Partecipanti massimi per tavolo'"
                                :value="$maxParticipants"
                                :description="'Contano i giocatori online. Chi è già dentro non viene espulso.'"
                                :min="1" :max="50" :required="true" />

                            <x-admin.textarea
                                :name="'rooms_limit_message'"
                                :label="'Messaggio a tavoli esauriti'"
                                :value="$message"
                                :description="'Mostrato nella home al posto del pulsante «Crea un tavolo». Se lo svuoti torna il testo predefinito.'"
                                :rows="3" />

                            <div class="form-footer">
                                <button type="submit" class="btn btn-primary">Salva</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
