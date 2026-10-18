<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote.')->dailyAt('08:30');

// Cancella i tavoli scaduti da più di tavolo.retention_days giorni.
Schedule::command('tavolo:prune')->hourly();
