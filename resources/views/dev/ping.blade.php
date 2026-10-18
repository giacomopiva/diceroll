<!doctype html>
<html lang="it">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Ping Reverb</title>
    @vite('resources/js/dev-ping.js')
</head>
<body>
    <h1>Ping Reverb (solo local)</h1>
    <input id="who" placeholder="nome" value="finestra">
    <button id="send" type="button">Invia ping</button>
    <ul id="log"></ul>
</body>
</html>
