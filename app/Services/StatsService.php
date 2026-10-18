<?php

namespace App\Services;

use App\Models\Participant;
use App\Models\Roll;
use App\Models\Room;
use App\Support\ChiSquare;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

/**
 * Statistiche d'uso per la dashboard admin. Tutto in sola lettura sui dati del tavolo
 * (stanze, partecipanti, lanci); la parte più pesante (scansione di tutti i dadi) è in cache.
 */
class StatsService
{
    public const DICE_CACHE_KEY = 'admin.stats.dice';

    public const DICE_CACHE_SECONDS = 300;

    /** @return array<string, int|float|null> */
    public function kpis(): array
    {
        $today = now()->startOfDay();
        $rollsToday = Roll::where('created_at', '>=', $today)->count();
        $rollsYesterday = Roll::whereBetween('created_at', [$today->copy()->subDay(), $today])->count();

        $rolls7 = Roll::where('created_at', '>=', now()->subDays(7))->count();
        $rollsPrev7 = Roll::whereBetween('created_at', [now()->subDays(14), now()->subDays(7)])->count();

        $rooms7 = Room::where('created_at', '>=', now()->subDays(7))->count();
        $roomsPrev7 = Room::whereBetween('created_at', [now()->subDays(14), now()->subDays(7)])->count();

        $roomsTotal = Room::count();
        $rollsTotal = Roll::count();

        return [
            'open_rooms' => Room::active()->count(),
            'open_rooms_with_players' => Room::active()->whereHas('participants', fn ($q) => $q->online())->count(),
            'online_players' => Participant::online()->count(),
            'rolls_today' => $rollsToday,
            'rolls_today_delta' => $this->delta($rollsToday, $rollsYesterday),
            'rolls_7d' => $rolls7,
            'rolls_7d_delta' => $this->delta($rolls7, $rollsPrev7),
            'rooms_7d' => $rooms7,
            'rooms_7d_delta' => $this->delta($rooms7, $roomsPrev7),
            'rooms_total' => $roomsTotal,
            'rolls_total' => $rollsTotal,
            'dice_total' => $this->diceStats()['total_dice'],
            'avg_rolls_per_room' => $roomsTotal ? round($rollsTotal / $roomsTotal, 1) : 0.0,
        ];
    }

    /**
     * Lanci e tavoli creati per giorno, ultimi $days giorni (oggi compreso), con gli zeri.
     *
     * @return array{labels: list<string>, days: list<string>, rolls: list<int>, rooms: list<int>}
     */
    public function perDay(int $days = 14): array
    {
        $start = now()->startOfDay()->subDays($days - 1);
        $rolls = $this->countByDay(Roll::class, $start);
        $rooms = $this->countByDay(Room::class, $start);

        $out = ['labels' => [], 'days' => [], 'rolls' => [], 'rooms' => []];
        for ($i = 0; $i < $days; $i++) {
            $day = $start->copy()->addDays($i);
            $key = $day->toDateString();
            $out['days'][] = $key;
            $out['labels'][] = $day->locale('it')->isoFormat('ddd D/M');
            $out['rolls'][] = $rolls[$key] ?? 0;
            $out['rooms'][] = $rooms[$key] ?? 0;
        }

        return $out;
    }

    /**
     * Lanci per ora del giorno (0-23) negli ultimi $days giorni.
     *
     * @return list<int>
     */
    public function perHour(int $days = 30): array
    {
        $expr = DB::getDriverName() === 'sqlite'
            ? "CAST(strftime('%H', created_at) AS INTEGER)"
            : 'HOUR(created_at)';

        $rows = Roll::where('created_at', '>=', now()->subDays($days))
            ->selectRaw("$expr as h, count(*) as n")
            ->groupBy('h')
            ->pluck('n', 'h');

        return array_map(fn (int $h) => (int) ($rows[$h] ?? 0), range(0, 23));
    }

    /**
     * Uso e distribuzione dei valori per tipo di dado, con test del chi-quadro contro l'uniforme.
     * In cache: scorre tutti i dadi lanciati.
     *
     * @return array{total_dice: int, types: array<string, array<string, mixed>>, generated_at: string}
     */
    public function diceStats(): array
    {
        return Cache::remember(self::DICE_CACHE_KEY, self::DICE_CACHE_SECONDS, function () {
            $counts = [];
            foreach (Roll::SIDES as $type => $faces) {
                $counts[$type] = array_fill(1, $faces, 0);
            }

            foreach (Roll::query()->select(['id', 'dice', 'values'])->cursor() as $roll) {
                foreach ($roll->dice as $i => $type) {
                    $value = $roll->values[$i] ?? null;
                    if (isset($counts[$type][$value])) {
                        $counts[$type][$value]++;
                    }
                }
            }

            $total = 0;
            $types = [];
            foreach ($counts as $type => $perFace) {
                $n = array_sum($perFace);
                $faces = count($perFace);
                $total += $n;
                $test = ChiSquare::uniform(array_values($perFace));
                $types[$type] = [
                    'type' => $type,
                    'faces' => $faces,
                    'count' => $n,
                    'observed' => array_values($perFace),
                    'expected' => round($n / $faces, 2),
                    'chi2' => round($test['chi2'], 2),
                    'df' => $test['df'],
                    'p' => $test['p'],
                    'verdict' => $this->verdict($n, $faces, $test['p']),
                ];
            }

            return ['total_dice' => $total, 'types' => $types, 'generated_at' => now()->toIso8601String()];
        });
    }

    /**
     * Esito del test: serve almeno 5 lanci attesi per faccia perché il chi-quadro sia affidabile.
     * Soglie basse (1% e 0,1%) perché si fanno 6 test insieme: meglio pochi falsi allarmi.
     */
    public function verdict(int $count, int $faces, float $p): string
    {
        return match (true) {
            $count < 5 * $faces => 'low',
            $p < 0.001 => 'alert',
            $p < 0.01 => 'watch',
            default => 'ok',
        };
    }

    /** @return Collection<int, Room> */
    public function openRooms(int $limit = 15): Collection
    {
        return $this->withCounts(Room::active())->orderByDesc('last_activity_at')->limit($limit)->get();
    }

    /** @return Collection<int, Roll> */
    public function latestRolls(int $limit = 12): Collection
    {
        return Roll::with(['participant', 'room'])->latest('id')->limit($limit)->get();
    }

    /**
     * Frasi di sintesi calcolate sui dati: si omette ciò che non ha abbastanza dati per dire qualcosa.
     *
     * @return list<array{icon: string, color: string, text: string}>
     */
    public function insights(): array
    {
        $out = [];
        $dice = $this->diceStats();
        $perDay = $this->perDay(14);
        $perHour = $this->perHour(30);
        $kpis = $this->kpis();

        if ($dice['total_dice'] > 0) {
            $top = collect($dice['types'])->sortByDesc('count')->first();
            $share = round($top['count'] / $dice['total_dice'] * 100);
            $out[] = ['icon' => 'ti-dice', 'color' => 'blue', 'text' => "Il dado più usato è il {$top['type']}: {$share}% dei dadi lanciati ({$top['count']} su {$dice['total_dice']})."];
        }

        if (array_sum($perHour) > 0) {
            $h = array_search(max($perHour), $perHour, true);
            $out[] = ['icon' => 'ti-clock', 'color' => 'orange', 'text' => sprintf('Si gioca di più tra le %02d:00 e le %02d:00: %s negli ultimi 30 giorni.', $h, ($h + 1) % 24, $this->plural($perHour[$h], 'lancio', 'lanci'))];
        }

        if (max($perDay['rolls']) > 0) {
            $i = array_search(max($perDay['rolls']), $perDay['rolls'], true);
            $out[] = ['icon' => 'ti-calendar-star', 'color' => 'green', 'text' => "Il giorno più attivo degli ultimi 14 è {$perDay['labels'][$i]}, con ".$this->plural($perDay['rolls'][$i], 'lancio', 'lanci').'.'];
        }

        if ($kpis['rolls_7d_delta'] !== null) {
            $d = $kpis['rolls_7d_delta'];
            $word = $d >= 0 ? 'in più' : 'in meno';
            $out[] = ['icon' => $d >= 0 ? 'ti-trending-up' : 'ti-trending-down', 'color' => $d >= 0 ? 'green' : 'red', 'text' => number_format(abs($d), 1, ',', '')."% di lanci {$word} negli ultimi 7 giorni rispetto ai 7 precedenti."];
        }

        if ($kpis['rooms_total'] > 0) {
            $empty = Room::doesntHave('rolls')->count();
            $out[] = ['icon' => 'ti-door-exit', 'color' => $empty / $kpis['rooms_total'] > 0.5 ? 'red' : 'azure', 'text' => round($empty / $kpis['rooms_total'] * 100).'% dei tavoli creati non ha mai avuto un lancio ('.$empty.' su '.$kpis['rooms_total'].').'];

            $withPlayers = Room::has('participants')->count();
            if ($withPlayers > 0) {
                $avg = round(Participant::count() / $withPlayers, 1);
                $out[] = ['icon' => 'ti-users', 'color' => 'purple', 'text' => 'In media '.number_format($avg, 1, ',', '').' giocatori per tavolo (contando solo i tavoli con almeno un giocatore).'];
            }
        }

        $longest = $this->withCounts(Room::query())->orderByDesc('rolls_count')->first();
        if ($longest && $longest->rolls_count > 0) {
            $out[] = ['icon' => 'ti-trophy', 'color' => 'yellow', 'text' => "Il tavolo più giocato è {$longest->code}, con ".$this->plural($longest->rolls_count, 'lancio', 'lanci').' e '.$this->plural($longest->participants_count, 'giocatore', 'giocatori').'.'];
        }

        $flagged = collect($dice['types'])->whereIn('verdict', ['watch', 'alert']);
        if ($flagged->isNotEmpty()) {
            $names = $flagged->map(fn ($t) => $t['type'].' (p = '.$this->formatP($t['p']).')')->implode(', ');
            $out[] = ['icon' => 'ti-alert-triangle', 'color' => 'red', 'text' => "Distribuzione dei valori da controllare: {$names}."];
        } elseif (collect($dice['types'])->contains('verdict', 'ok')) {
            $out[] = ['icon' => 'ti-shield-check', 'color' => 'green', 'text' => 'Nessuna anomalia nella distribuzione dei valori dei dadi (test del chi-quadro).'];
        }

        return $out;
    }

    /**
     * @template TBuilder of \Illuminate\Database\Eloquent\Builder
     *
     * @param  TBuilder  $query
     * @return TBuilder
     */
    public function withCounts($query)
    {
        return $query->withCount([
            'rolls',
            'participants',
            'participants as online_count' => fn ($q) => $q->online(),
        ]);
    }

    private function plural(int $n, string $one, string $many): string
    {
        return $n.' '.($n === 1 ? $one : $many);
    }

    public function formatP(float $p): string
    {
        return $p < 0.0001 ? '< 0,0001' : number_format($p, 4, ',', '');
    }

    /** Variazione percentuale; null se il periodo di confronto è vuoto. */
    private function delta(int $now, int $before): ?float
    {
        return $before === 0 ? null : round(($now - $before) / $before * 100, 1);
    }

    /**
     * @param  class-string<Model>  $model
     * @return array<string, int>
     */
    private function countByDay(string $model, Carbon $since): array
    {
        return $model::where('created_at', '>=', $since)
            ->selectRaw('DATE(created_at) as d, count(*) as n')
            ->groupBy('d')
            ->pluck('n', 'd')
            ->map(fn ($n) => (int) $n)
            ->all();
    }
}
