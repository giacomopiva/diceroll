<?php

namespace App\Http\Controllers\Admin;

use App\Models\Room;
use App\Services\StatsService;
use Illuminate\Http\Request;
use Illuminate\View\View;

class RoomController extends AdminController
{
    public function __construct(private StatsService $stats) {}

    /** Elenco dei tavoli, filtrabile per stato (aperti, scaduti, tutti). */
    public function index(Request $request): View
    {
        $status = in_array($request->query('stato'), ['aperti', 'scaduti'], true) ? $request->query('stato') : 'tutti';

        $query = $this->stats->withCounts(Room::query())->orderByDesc('last_activity_at');
        if ($status === 'aperti') {
            $query->active();
        } elseif ($status === 'scaduti') {
            $query->expired();
        }

        return view('admin.room.index', [
            'rooms' => $query->paginate(25)->withQueryString(),
            'status' => $status,
            'counts' => ['aperti' => Room::active()->count(), 'scaduti' => Room::expired()->count()],
        ]);
    }

    /** Dettaglio di un tavolo: partecipanti e storico completo dei lanci. */
    public function show(Room $room): View
    {
        return view('admin.room.show', [
            'room' => $room,
            'participants' => $room->participants()->withCount('rolls')->orderBy('id')->get(),
            'rolls' => $room->rolls()->with('participant')->latest('id')->paginate(50),
        ]);
    }
}
