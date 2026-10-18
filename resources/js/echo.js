import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

// Configurazione a runtime, iniettata dalla pagina (config/tavolo.php): il build non dipende
// dall'ambiente in cui è stato fatto. Le variabili VITE_REVERB_* restano come ripiego per Reverb.
const rt = window.TAVOLO_REALTIME ?? {};

if (rt.driver === 'pusher') {
    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: rt.key,
        cluster: rt.cluster,
        forceTLS: true,
    });
} else {
    const scheme = rt.scheme ?? import.meta.env.VITE_REVERB_SCHEME ?? 'https';
    const port = rt.port ?? import.meta.env.VITE_REVERB_PORT;

    window.Echo = new Echo({
        broadcaster: 'reverb',
        key: rt.key ?? import.meta.env.VITE_REVERB_APP_KEY,
        wsHost: rt.host ?? import.meta.env.VITE_REVERB_HOST,
        wsPort: port ?? 80,
        wssPort: port ?? 443,
        forceTLS: scheme === 'https',
        enabledTransports: ['ws', 'wss'],
    });
}
