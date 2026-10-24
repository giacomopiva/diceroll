<?php

namespace App\Http\Controllers\Table;

use App\Http\Controllers\Controller;
use App\Models\Roll;
use App\Services\RoomService;
use App\Services\SettingsService;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __construct(private RoomService $rooms, private SettingsService $settings) {}

    public function index(): View
    {
        return view('table.home', [
            'full' => ! $this->rooms->canCreateRoom(),
            'limitMessage' => $this->settings->roomsLimitMessage(),
            // Numeri citati nel testo della pagina: vengono dalle impostazioni, mai scritti a mano.
            'expire' => $this->settings->expireLabel(),
            'maxParticipants' => $this->settings->maxParticipants(),
            'retentionDays' => (int) config('tavolo.retention_days'),
            'historyLimit' => $this->settings->historyLimit(),
            'maxDice' => Roll::MAX_DICE,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        if (! $this->rooms->canCreateRoom()) {
            return redirect()->route('home');
        }

        $room = $this->rooms->createRoom($request->user());

        return redirect()->route('table.show', $room);
    }
}
