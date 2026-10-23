<?php

namespace App\Http\Controllers\User;

use App\Services\RoomService;
use App\Services\SettingsService;
use Illuminate\View\View;

class HomeController extends UserController
{
    public function __construct(private RoomService $rooms, private SettingsService $settings) {}

    /**
     * Display the user dashboard's home page.
     *
     * @return View A view for the user home page.
     */
    public function index(): View
    {
        $user = auth()->user();

        return view('user.home', [
            // I tavoli non scaduti creati dall'utente, i più recenti per primi.
            'rooms' => $user->rooms()->active()
                ->withCount(['participants as online_count' => fn ($q) => $q->online()])
                ->withCount('rolls')
                ->orderByDesc('last_activity_at')->get(),
            'canCreate' => $this->rooms->canCreateRoom(),
            'limitMessage' => $this->settings->roomsLimitMessage(),
        ]);
    }
}
