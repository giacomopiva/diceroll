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
        $cutoff = Room::expiryCutoff()->subDays(config('tavolo.retention_days'));

        $query = Room::where(fn ($q) => $q->where('last_activity_at', '<', $cutoff)
            ->orWhere(fn ($q) => $q->whereNull('last_activity_at')->where('created_at', '<', $cutoff)));

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
