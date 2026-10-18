<?php

namespace App\Http\Controllers\Admin;

use App\Services\StatsService;
use Illuminate\View\View;

class HomeController extends AdminController
{
    public function __construct(private StatsService $stats) {}

    /**
     * Dashboard admin: statistiche d'uso del tavolo dei dadi.
     */
    public function index(): View
    {
        $dice = $this->stats->diceStats();

        return view('admin.home', [
            'kpis' => $this->stats->kpis(),
            'perDay' => $this->stats->perDay(14),
            'perHour' => $this->stats->perHour(30),
            'dice' => $dice,
            'insights' => $this->stats->insights(),
            'openRooms' => $this->stats->openRooms(),
            'latestRolls' => $this->stats->latestRolls(),
            'stats' => $this->stats,
        ]);
    }
}
