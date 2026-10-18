<?php

namespace App\Http\Controllers\Table;

use App\Http\Controllers\Controller;
use App\Http\Requests\JoinRoomRequest;
use App\Models\Room;
use App\Services\RoomService;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class TableController extends Controller
{
    public function __construct(private RoomService $rooms) {}

    public function show(Request $request, Room $room): View
    {
        $participant = $this->rooms->currentParticipant($room, $request);

        if (! $participant) {
            return view('table.join', ['room' => $room]);
        }

        $this->rooms->markSeen($participant);

        // Ultimi lanci per chi entra a partita iniziata, dal più vecchio al più recente.
        $history = $room->rolls()->with('participant')->latest('id')->limit(30)->get()
            ->reverse()->values()->map(fn ($roll) => $roll->toPayload());

        return view('table.show', ['room' => $room, 'participant' => $participant, 'history' => $history]);
    }

    public function join(JoinRoomRequest $request, Room $room): RedirectResponse
    {
        $data = $request->validated();

        $this->rooms->join($room, $data['nickname'], $data['color'], $request);

        return redirect()->route('table.show', $room);
    }
}
