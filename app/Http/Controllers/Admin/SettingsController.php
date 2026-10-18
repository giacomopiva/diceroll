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
        return view('admin.settings.edit', [
            'maxRooms' => $this->settings->maxRooms(),
            'maxParticipants' => $this->settings->maxParticipants(),
            'message' => $this->settings->roomsLimitMessage(),
            'openRooms' => Room::active()->count(),
        ]);
    }

    public function update(SettingsRequest $request): RedirectResponse
    {
        $this->settings->save($request->validated());

        return redirect()->route('admin.settings.edit')->with('saved', true);
    }
}
