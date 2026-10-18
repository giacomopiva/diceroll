# Tavolo dei Dadi

Tavolo virtuale per lanciare dadi da gioco di ruolo. Chi ha il link di un tavolo (come in Google Meet) entra, sceglie un nickname e il colore dei propri dadi, e vede in tempo reale gli stessi lanci di tutti gli altri. Nessun account: il risultato di ogni dado lo decide il server, il browser anima soltanto la fisica.

Il progetto è costruito sopra il boilerplate Laravel descritto in fondo a questo file, che resta intatto (area admin, autenticazione, ruoli).

## Cosa fa

- **Tavoli usa-e-getta** con link `…/t/xxx-xxx-xxx`, ingresso con nickname e colore dei dadi.
- **Dadi 3D** (d4, d6, d8, d10, d12, d20, fino a 40 per lancio) con fisica realistica e suono. Chi lancia e chi guarda vedono lo stesso lancio, anche più lanci insieme.
- **Registro dei lanci** (con storico per chi entra dopo) e **lista dei giocatori online**.
- **Scadenza**: un tavolo fermo da 24 ore non è più raggiungibile e viene poi cancellato.
- **Area admin** (`/admin/home`): statistiche d'uso, controllo di equità dei dadi (chi-quadro), tavoli aperti e storico dei lanci.

Stack: Laravel 13, PHP 8.3, MySQL/MariaDB, Blade + JavaScript vanilla con Vite, Three.js e cannon-es, Laravel Echo con Reverb (locale) o Pusher (produzione), Pest e Vitest.

## Installazione in locale

Requisiti: PHP 8.3 (con `pdo_mysql` e `pdo_sqlite`), Composer, Node 20 o successivo, MySQL o MariaDB.

1. Clona il repository e installa le dipendenze:
   ```bash
   composer install
   npm install
   ```
2. Crea il file di configurazione e la chiave dell'applicazione:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
3. Crea un database vuoto e imposta in `.env` `DB_DATABASE`, `DB_USERNAME` e `DB_PASSWORD`.
4. Configura Reverb per lo sviluppo. Per un ambiente locale i valori possono essere inventati; i segreti li genera, per esempio, `php -r 'echo bin2hex(random_bytes(10));'`:
   ```dotenv
   BROADCAST_CONNECTION=reverb
   REVERB_APP_ID=<un numero qualsiasi, per esempio 100001>
   REVERB_APP_KEY=<stringa casuale>
   REVERB_APP_SECRET=<stringa casuale>
   REVERB_HOST=localhost
   REVERB_PORT=8080
   REVERB_SCHEME=http
   ```
5. Crea le tabelle e gli utenti di prova:
   ```bash
   php artisan migrate --seed
   ```
6. Avvia i tre processi, ciascuno in un terminale:
   ```bash
   php artisan serve          # applicazione su http://localhost:8000
   php artisan reverb:start   # WebSocket: senza, gli altri non vedono i lanci in tempo reale
   npm run dev                # Vite
   ```
   Non serve un queue worker: gli eventi vengono trasmessi subito. Se vuoi provare anche la scadenza dei tavoli, in un quarto terminale `php artisan schedule:work`.
7. Apri `http://localhost:8000`, crea un tavolo e invia il link a un altro browser. Per provare due giocatori sulla stessa macchina usa due host diversi (`localhost` e `127.0.0.1`), perché schede dello stesso profilo condividono la sessione.

L'area admin è su `http://localhost:8000/login` con l'utente creato dal seeder (vedi "Installazione" del boilerplate in fondo).

### Comandi utili

```bash
vendor/bin/pest        # test PHP (database sqlite in memoria, non toccano il tuo database)
npm run test:js        # test dei moduli dei dadi, in Node
vendor/bin/pint        # formattazione del codice
npm run build          # build di produzione in public/build
php artisan tavolo:prune --dry-run   # quanti tavoli verrebbero cancellati
```

### Variabili di configurazione del tavolo

| Variabile | Predefinito | Significato |
|---|---|---|
| `BROADCAST_CONNECTION` | `log` | `reverb` in locale, `pusher` in produzione |
| `TAVOLO_EXPIRE_HOURS` | `24` | ore senza attività dopo cui un tavolo scade |
| `TAVOLO_RETENTION_DAYS` | `30` | giorni in cui i dati di un tavolo scaduto restano (statistiche admin); `0` cancella subito |
| `REVERB_*` | – | server Reverb (`REVERB_APP_ID/KEY/SECRET`, `REVERB_HOST/PORT/SCHEME`) |
| `REVERB_CLIENT_HOST/PORT/SCHEME` | come `REVERB_*` | opzionali: come il *browser* raggiunge Reverb, se diverso da come lo raggiunge il server (utile dietro un proxy) |
| `PUSHER_APP_ID/KEY/SECRET/CLUSTER` | – | credenziali Pusher per la produzione |

## Come funziona, in breve

1. `POST /t/{tavolo}/rolls` riceve solo i tipi di dado. Il server genera valori (`random_int`) e un `seed`, salva il lancio e lo trasmette agli altri sul canale pubblico `table.{codice}` (il codice del tavolo fa da segreto). Chi ha lanciato anima dalla risposta HTTP.
2. Ogni browser precalcola la fisica con quel `seed` e orienta le etichette dei dadi in modo che si fermino sul numero deciso dal server. Alla fine rilegge la faccia in alto e la confronta con il server (la spunta verde nel registro).
3. Presenza: heartbeat ogni 20 secondi e avviso all'uscita; chi sparisce senza avvisare viene tolto dopo circa un minuto.
4. Se il servizio realtime è irraggiungibile, il lancio riesce comunque: chi lancia lo vede, gli altri lo ritrovano ricaricando la pagina.

## Deploy su Cloudways

Il realtime in produzione usa **Pusher**: Reverb richiederebbe un processo sempre attivo e un proxy WebSocket, che su Cloudways non si configurano in autonomia. Reverb resta per lo sviluppo locale; si passa dall'uno all'altro solo con `BROADCAST_CONNECTION`.

### 1. Pusher

Nel dashboard di Pusher crea un'app **Channels** (frontend "Vanilla JS", backend "Laravel") e scegli il cluster europeo `eu`. Servono quattro valori: `app_id`, `key`, `secret`, `cluster`. Il `secret` non va mai nel repository né in chat: solo nel `.env` del server. Se per sbaglio lo condividi, rigeneralo dal dashboard (App Keys → Reset secret) e aggiorna il `.env`.

### 2. Applicazione e database

1. Nel pannello Cloudways crea un'applicazione **Laravel** (PHP 8.3 o successivo) con il suo database MySQL/MariaDB. La web root deve puntare alla cartella `public/` dell'applicazione (controlla nelle impostazioni dell'applicazione).
2. Porta il codice sul server, per esempio con il deploy da Git del pannello. In SSH:
   ```bash
   cd <cartella-applicazione>
   composer install --no-dev --optimize-autoloader
   ```
3. Il front-end **non si compila sul server**: `public/build` è versionato. In locale esegui `npm run build` e fai commit di `public/build` prima di ogni deploy. Il build non contiene host né chiavi: la configurazione realtime viene letta a runtime dal `.env`. Verifica che sul server non esista `public/hot`.

### 3. File `.env` di produzione

Valori da impostare (senza i segreti, che inserisci tu):

```dotenv
APP_ENV=production
APP_DEBUG=false
APP_URL=https://<il-tuo-dominio>
APP_KEY=<generata con php artisan key:generate --show>

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=<nome>
DB_USERNAME=<utente>
DB_PASSWORD=<password>

SESSION_DRIVER=database
CACHE_STORE=database
QUEUE_CONNECTION=database

BROADCAST_CONNECTION=pusher
PUSHER_APP_ID=<da Pusher>
PUSHER_APP_KEY=<da Pusher>
PUSHER_APP_SECRET=<da Pusher, solo qui>
PUSHER_APP_CLUSTER=eu

TAVOLO_EXPIRE_HOURS=24
TAVOLO_RETENTION_DAYS=30
```

Se l'applicazione è dietro HTTPS (lo è su Cloudways con il certificato attivo), `APP_URL` deve iniziare con `https://`.

### 3b. Primo avvio del database

```bash
php artisan migrate --force
php artisan db:seed --class=UserRolesSeeder     # crea i ruoli admin e user
php artisan config:cache && php artisan route:cache && php artisan view:cache
```

**Non lanciare `db:seed` completo in produzione**: crea utenti con password `password`. Crea invece il tuo amministratore con `php artisan tinker`:

```php
$u = App\Models\User::create(['name' => 'Il tuo nome', 'email' => 'tu@esempio.it', 'password' => bcrypt('<password robusta>'), 'status' => true]);
$u->assignRole('admin');
```

### 4. Cron per la scadenza dei tavoli

Senza cron i tavoli scaduti restano nel database (non sono comunque più raggiungibili). Nel pannello Cloudways, in **Cron Job Management**, aggiungi un job ogni minuto con il percorso reale dell'applicazione (controllalo in SSH con `pwd`):

```
cd <percorso-applicazione> && php artisan schedule:run >> /dev/null 2>&1
```

### 5. Verifica dopo il deploy

1. Apri la home, crea un tavolo, entra con un nickname.
2. Apri il link in un secondo browser (o in una finestra privata) ed entra con un altro nickname: ognuno deve comparire nella lista "Al tavolo" dell'altro.
3. Lancia il d20 in una finestra: il lancio deve comparire anche nell'altra, con gli stessi numeri.
4. Entra in `/admin/home` con l'utente admin.

### Problemi frequenti

| Sintomo | Causa probabile |
|---|---|
| Errore WebSocket in console, i lanci degli altri non arrivano | `BROADCAST_CONNECTION` non è `pusher`, credenziali o cluster sbagliati, `.env` cambiato senza `php artisan config:clear` |
| Il lancio riesce solo a chi lo fa; `storage/logs` mostra `BroadcastException` | Pusher non raggiungibile o chiave/segreto errati |
| `Failed to resolve module specifier "lodash"` | build vecchio (precedente alla correzione): rifai `npm run build` e il commit di `public/build` |
| Il browser cerca `localhost:8080` | build o configurazione vecchi: rifai il build e `config:clear` |
| "Tavolo scaduto" | il tavolo era fermo da più di `TAVOLO_EXPIRE_HOURS` ore: ne serve uno nuovo |
| Sul server compaiono file da `localhost:5173` | esiste `public/hot`: eliminalo |

---

# Laravel Boilerplate

Questo è un boilerplate Laravel preconfigurato con vari pacchetti utili per iniziare rapidamente lo sviluppo di nuove applicazioni.

## Tema Grafico

### Tema grafico installato area Admin

[Tabler](https://tabler.io/admin-template)  
[Demo](https://tabler.io/admin-template/preview/) 
[Documentation](https://docs.tabler.io/ui) 
[Source](https://github.com/tabler/tabler) 

### Tema grafico installato area Frontend

#### Front

[Front](https://themes.getbootstrap.com/product/front-multipurpose-responsive-template)  
[Demo](https://htmlstream.com/front)  

#### Flex Start

[FlexStart](https://bootstrapmade.com/demo/FlexStart/)  

#### Bootstrap 5

[Bootstrap](https://getbootstrap.com/)  

### Fonts
[BunnyFont](https://fonts.bunny.net/)

## Package installati

- **[barryvdh/laravel-dompdf](https://github.com/barryvdh/laravel-dompdf)**: Per la generazione di file PDF.
- **[elgibor-solution/laravel-database-encryption](https://github.com/elgibor-solution/laravel-database-encryption)**: Per la crittografia dei dati nel database.
- **[laravel/framework](https://github.com/laravel/framework)**: Il framework Laravel stesso.
- **[laravel/tinker](https://github.com/laravel/tinker)**: Console interattiva per Laravel.
- **[laravel/ui](https://github.com/laravel/ui)**: Generazione di autenticazione e scaffolding.
- **[maatwebsite/excel](https://github.com/maatwebsite/Laravel-Excel)**: Importa ed esporta file Excel.
- **[opcodesio/log-viewer](https://github.com/opcodes-io/laravel-log-viewer)**: Visualizzatore di log Laravel.
- **[spatie/laravel-backup](https://github.com/spatie/laravel-backup)**: Backup automatizzati del database e dei file.
- **[spatie/laravel-permission](https://github.com/spatie/laravel-permission)**: Gestione delle autorizzazioni.
- **[yajra/laravel-datatables-oracle](https://github.com/yajra/laravel-datatables)**: Integrare DataTables.

### Pacchetti di sviluppo

- **[barryvdh/laravel-debugbar](https://github.com/barryvdh/laravel-debugbar)**: Barra di debug per Laravel.
- **[fakerphp/faker](https://github.com/fakerphp/faker)**: Generazione di dati falsi per i test.
- **[larastan/larastan](https://github.com/nunomaduro/larastan)**: Static Analyzer per Laravel.
- **[laravel/envoy](https://github.com/laravel/envoy)**: Strumento per la definizione di task SSH.
- **[laravel/pint](https://github.com/laravel/pint)**: Strumenti per il test delle prestazioni Laravel.
- **[laravel/sail](https://github.com/laravel/sail)**: Ambiente di sviluppo Docker per Laravel.
- **[mockery/mockery](https://github.com/mockery/mockery)**: Framework per la creazione di mock in PHP.
- **[nunomaduro/collision](https://github.com/nunomaduro/collision)**: Migliora il gestore delle eccezioni di Laravel.
- **[nunomaduro/phpinsights](https://github.com/nunomaduro/phpinsights)**: Analisi statica del codice PHP.
- **[pestphp/pest](https://github.com/pestphp/pest)**: Framework di testing leggero per PHP.
- **[phpunit/phpunit](https://github.com/sebastianbergmann/phpunit)**: Framework di testing unitario per PHP.
- **[spatie/laravel-ignition](https://github.com/spatie/laravel-ignition)**: Strumento di debug per Laravel.

### Backup

[spatie/laravel-backup](https://github.com/spatie/laravel-backup)

### PHPInsights

[nunomaduro/phpinsights](https://github.com/nunomaduro/phpinsights)

### Google API 

[Developer Guide](https://developers.google.com/sheets/api/quickstart/php)  
[Documentazione](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values)  
[Tutorial](https://www.youtube.com/watch?v=mV-k9uXd42A)  

### Google Calendar

[spatie/laravel-google-calendar](https://github.com/spatie/laravel-google-calendar)

## Alcuni tutorial utili

[Validazione](https://www.laravelcode.com/post/laravel-8-ajax-crud-with-yajra-datatable-and-bootstrap-model-validation-example)  
[TDD](https://jsdecena.medium.com/simple-tdd-in-laravel-with-11-steps-c475f8b1b214)  
[SOLID](https://youtu.be/OmtLxnjMnlY)  
[Action](https://www.youtube.com/watch?v=izFyFtpEGoY)  
[REST API](https://www.youtube.com/watch?v=MT-GJQIY3EU)  
[Google Data Studio](https://youtu.be/r5Ug0588c2g)  

## Vue JS 2

[Vue JS 2](https://v2.vuejs.org/v2/guide/) 

## Vue JS 3

[Vue JS 3](https://vuejs.org/guide/introduction.html/) 

## Installazione

1. Clona il repository.
2. Esegui `composer install` per installare le dipendenze.
3. Copia il file `.env.example` in `.env` e configurane i dettagli del database.
4. Esegui `php artisan key:generate` per generare una nuova chiave dell'applicazione.
5. Esegui le migrazioni del database con `php artisan migrate --seed`.
6. Puoi avviare il server di sviluppo con `php artisan serve`.
7. Per abilitare la registrazione agire sulla configurazione delle rotte.
8. Gli utenti creati con i seed sono: 
- Utente Admin: admin@example.com con password `password`
- Utente User: user@example.com con password `password`

## Test

### Eseguire i test

Per eseguire i test bisogna preparare il file `.env.testing` ed eseguire il comando: `./vendor/bin/phpunit` oppure `envoy run test`

## Contribuire

Non si può contribuire.

## Licenza

Questo boilerplate è distribuito con la licenza MIT.

## Autori

Gli autori di questo progetto sono:  
[Giacomo Piva](https://www.innovativa.it)  
[Alessandro Tieri](https://www.unife.it)  
[Federica Filippi ](https://www.unife.it)  
