<?php

namespace App\Events;

use App\Models\Participant;
use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;

/** Un partecipante non è più online: chi ascolta lo toglie dalla lista. */
class ParticipantLeft implements ShouldBroadcastNow
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
        return ['id' => $this->participant->id];
    }
}
