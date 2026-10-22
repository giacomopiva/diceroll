<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\SettingsRequest;
use App\Models\Room;
use App\Services\SettingsService;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class SettingsController extends AdminController
{
    public function __construct(private SettingsService $settings) {}

    public function edit(): View
    {
        $open = Room::active()->get(['last_activity_at']);

        return view('admin.settings.edit', [
            'expireHours' => $this->settings->expireHours(),
            'historyLimit' => $this->settings->historyLimit(),
            'maxRooms' => $this->settings->maxRooms(),
            'maxParticipants' => $this->settings->maxParticipants(),
            'message' => $this->settings->roomsLimitMessage(),
            'fullMessage' => $this->settings->roomFullTemplate(),
            'openRooms' => $open->count(),
            // Ore di inattività dei tavoli aperti: il pannello conta quanti scadrebbero con una scadenza più bassa.
            'openRoomsIdleHours' => $open->map(fn (Room $r) => round($r->last_activity_at->diffInMinutes(now()) / 60, 2))->values(),
        ]);
    }

    public function update(SettingsRequest $request): RedirectResponse
    {
        $this->settings->save($request->validated());

        return redirect()->route('admin.settings.edit')->with('saved', true);
    }
}
