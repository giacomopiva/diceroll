<?php

return [

    /*
    | Parametri con cui il BROWSER si collega a Reverb. Possono differire da quelli del server
    | (REVERB_HOST/PORT/SCHEME, usati da Laravel per pubblicare gli eventi): in produzione il server
    | parla con Reverb su 127.0.0.1 in http, il browser va su wss://dominio:443 attraverso il proxy.
    */
    'realtime' => [
        'key' => env('REVERB_APP_KEY'),
        'host' => env('REVERB_CLIENT_HOST', env('REVERB_HOST')),
        'port' => (int) env('REVERB_CLIENT_PORT', env('REVERB_PORT')),
        'scheme' => env('REVERB_CLIENT_SCHEME', env('REVERB_SCHEME', 'https')),
    ],

];
