<?php

namespace App\Http\Controllers\Table;

use App\Http\Controllers\Controller;
use App\Http\Requests\RollRequest;
use App\Models\Room;
use App\Services\RollService;
use App\Services\RoomService;
use Illuminate\Http\JsonResponse;

class RollController extends Controller
{
    public function __construct(private RoomService $rooms, private RollService $rolls) {}

    public function store(RollRequest $request, Room $room): JsonResponse
    {
        $participant = $this->rooms->currentParticipant($room, $request);

        abort_unless($participant, 403, 'Entra prima al tavolo.');

        $roll = $this->rolls->roll($room, $participant, $request->validated('dice'));

        return response()->json($roll->toPayload(), 201);
    }
}
