<?php

namespace App\Console\Commands;

use App\Models\Room;
use Illuminate\Console\Command;

class PruneRooms extends Command
{
    protected $signature = 'tavolo:prune {--dry-run : Mostra quanti tavoli verrebbero cancellati senza cancellarli}';

    protected $description = 'Cancella i tavoli scaduti da più di tavolo.retention_days giorni (con partecipanti e lanci)';

    public function handle(): int
    {
        $days = (int) config('tavolo.retention_days');

        // Ogni tavolo si cancella `retention_days` dopo la propria scadenza (che può essere personale).
        $query = Room::whereExpiry(Room::query(), function ($q, $expiry) use ($days) {
            $cutoff = $expiry->copy()->subDays($days);

            return $q->where(fn ($w) => $w->where('last_activity_at', '<', $cutoff)
                ->orWhere(fn ($w) => $w->whereNull('last_activity_at')->where('created_at', '<', $cutoff)));
        });

        $count = $query->count();

        if ($this->option('dry-run')) {
            $this->info("{$count} tavoli da cancellare (dry run).");

            return self::SUCCESS;
        }

        // Partecipanti e lanci spariscono con le chiavi esterne in cascata.
        $query->delete();

        $this->info("{$count} tavoli cancellati.");

        return self::SUCCESS;
    }
}
