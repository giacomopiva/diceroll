<?php

namespace App\Events;

use App\Models\Roll;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;

/**
 * Lancio deciso dal server, trasmesso a tutti i browser del tavolo.
 * Canale pubblico: il codice stanza fa da segreto. ShouldBroadcastNow per non dipendere da un queue worker.
 */
class DiceRolled implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets;

    public function __construct(public Roll $roll)
    {
        $this->roll->loadMissing('room', 'participant');
    }

    public function broadcastOn(): Channel
    {
        return new Channel('table.'.$this->roll->room->code);
    }

    /** @return array<string, mixed> */
    public function broadcastWith(): array
    {
        return $this->roll->toPayload();
    }
}
