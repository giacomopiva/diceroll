<?php

namespace App\Events;

use App\Models\Participant;
use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;

/** Un partecipante è online (entrato, tornato o aggiornato): chi ascolta lo aggiunge o lo aggiorna in lista. */
class ParticipantJoined implements ShouldBroadcastNow
{
    use Dispatchable;

    public function __construct(public Participant $participant)
    {
        $this->participant->loadMissing('room');
    }

    public function broadcastOn(): Channel
    {
        return new Channel('table.'.$this->participant->room->code);
    }

    /** @return array<string, mixed> */
    public function broadcastWith(): array
    {
        return $this->participant->toPayload();
    }
}
