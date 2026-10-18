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
