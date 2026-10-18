<?php

namespace App\Http\Controllers\Table;

use App\Http\Controllers\Controller;
use App\Models\Participant;
use App\Models\Room;
use App\Services\PresenceService;
use App\Services\RoomService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PresenceController extends Controller
{
    public function __construct(private RoomService $rooms, private PresenceService $presence) {}

    public function heartbeat(Request $request, Room $room): Response
    {
        $this->presence->heartbeat($this->participant($request, $room));

        return response()->noContent();
    }

    /** Chiamata con sendBeacon alla chiusura della pagina. */
    public function leave(Request $request, Room $room): Response
    {
        $this->presence->leave($this->participant($request, $room));

        return response()->noContent();
    }

    private function participant(Request $request, Room $room): Participant
    {
        $participant = $this->rooms->currentParticipant($room, $request);

        abort_unless($participant, 403, 'Entra prima al tavolo.');

        return $participant;
    }
}
