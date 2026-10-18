<?php

namespace App\Http\Controllers\Table;

use App\Http\Controllers\Controller;
use App\Services\RoomService;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;

class HomeController extends Controller
{
    public function __construct(private RoomService $rooms) {}

    public function index(): View
    {
        return view('table.home');
    }

    public function store(): RedirectResponse
    {
        $room = $this->rooms->createRoom();

        return redirect()->route('table.show', $room);
    }
}
