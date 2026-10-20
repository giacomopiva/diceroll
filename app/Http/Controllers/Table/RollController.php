<?php

namespace App\Http\Controllers\Table;

use App\Http\Controllers\Controller;
use App\Http\Requests\RerollRequest;
use App\Http\Requests\RollRequest;
use App\Models\Roll;
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

    /** Rilancio di un dado: il valore lo decide il server, il corpo porta solo indice e punto di partenza. */
    public function reroll(RerollRequest $request, Room $room, Roll $roll): JsonResponse
    {
        $participant = $this->rooms->currentParticipant($room, $request);

        abort_unless($participant, 403, 'Entra prima al tavolo.');

        $data = $request->validated();
        $new = $this->rolls->reroll($room, $participant, $roll, $data['index'], $data['origin']);

        return response()->json($new->toPayload(), 201);
    }
}
