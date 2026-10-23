<?php

/*
| Parametri con cui il BROWSER si collega al servizio realtime, scelti da BROADCAST_CONNECTION.
|
| - reverb: REVERB_CLIENT_* possono differire da REVERB_HOST/PORT/SCHEME, che usa il server Laravel
|   per pubblicare: in produzione il server parla con Reverb su 127.0.0.1 in http, il browser va su
|   wss://dominio:443 attraverso il proxy.
| - pusher: bastano chiave pubblica e cluster (il secret resta solo lato server).
*/
$pusher = env('BROADCAST_CONNECTION') === 'pusher';

return [

    // Un tavolo senza attività (join, lanci, apertura della pagina) da tante ore scade: non è più
    // raggiungibile. I dati restano per retention_days giorni (statistiche admin), poi tavolo.prune li cancella.
    // TAVOLO_RETENTION_DAYS=0 cancella i tavoli appena scadono.
    'expire_after_hours' => (int) env('TAVOLO_EXPIRE_HOURS', 24),
    'retention_days' => (int) env('TAVOLO_RETENTION_DAYS', 30),

    // Default dei parametri del pannello Impostazioni: il valore effettivo si legge sempre da SettingsService
    // (expire_after_hours qui sopra compreso, riportato a 1–24 ore). max_rooms e max_participants: 0 = nessun limite.
    'max_rooms' => 4,
    'max_participants' => 6,
    'rooms_limit_message' => 'Al momento tutti i tavoli sono occupati. Riprova tra qualche minuto.',
    // :max diventa il numero massimo di giocatori.
    'room_full_message' => 'Il tavolo è al completo (:max giocatori). Riprova più tardi.',
    // Lanci recenti che vede chi entra (e che tiene il registro del browser), 10–100.
    'history_limit' => 20,

    // Immagine che l'utente mette nell'intestazione dei suoi tavoli. Limiti provvisori: max_kb in kB,
    // max_px = lato massimo (larghezza e altezza). SVG escluso di proposito (può contenere script).
    'logo' => [
        'mimes' => ['png', 'jpg', 'webp'],
        'max_kb' => 2048,
        'max_px' => 2000,
    ],

    'realtime' => $pusher
        ? [
            'driver' => 'pusher',
            'key' => env('PUSHER_APP_KEY'),
            'cluster' => env('PUSHER_APP_CLUSTER'),
        ]
        : [
            'driver' => 'reverb',
            'key' => env('REVERB_APP_KEY'),
            'host' => env('REVERB_CLIENT_HOST', env('REVERB_HOST')),
            'port' => (int) env('REVERB_CLIENT_PORT', env('REVERB_PORT')),
            'scheme' => env('REVERB_CLIENT_SCHEME', env('REVERB_SCHEME', 'https')),
        ],

];
