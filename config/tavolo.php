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

    // Limiti di default, modificabili da admin (Impostazioni): tavoli aperti insieme e partecipanti online per tavolo.
    'max_rooms' => 4,
    'max_participants' => 6,
    'rooms_limit_message' => 'Al momento tutti i tavoli sono occupati. Riprova tra qualche minuto.',

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
