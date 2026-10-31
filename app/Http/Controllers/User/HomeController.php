<?php

namespace App\Http\Controllers\User;

use App\Services\StatsService;
use Illuminate\View\View;

class HomeController extends UserController
{
    public function __construct(private StatsService $stats) {}

    /**
     * Home dell'utente: la dashboard con le statistiche dei tavoli che ha creato.
     */
    public function index(): View
    {
        $stats = $this->stats->forUser(auth()->user());

        return view('dashboard', [
            'scope' => 'user',
            'kpis' => $stats->kpis(),
            'perDay' => $stats->perDay(14),
            'perHour' => $stats->perHour(30),
            'dice' => $stats->diceStats(),
            'insights' => $stats->insights(),
            'openRooms' => $stats->openRooms(),
            'latestRolls' => $stats->latestRolls(),
            'stats' => $stats,
        ]);
    }
}
