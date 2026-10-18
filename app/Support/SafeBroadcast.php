<?php

namespace App\Support;

use Illuminate\Broadcasting\BroadcastException;

/**
 * Trasmette un evento senza far fallire la richiesta se Reverb non risponde:
 * lo stato è già sul DB, l'errore va nel log.
 */
final class SafeBroadcast
{
    public static function send(object $event, bool $toOthers = false): void
    {
        try {
            $pending = broadcast($event);

            if ($toOthers) {
                $pending->toOthers();
            }

            // L'invio avviene alla distruzione del PendingBroadcast: deve restare dentro il try.
            $pending = null;
        } catch (BroadcastException $e) {
            report($e);
        }
    }
}
