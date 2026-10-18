<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;

/**
 * Evento di prova della tappa 1: verifica la catena Laravel -> Reverb -> Echo.
 * Da rimuovere quando arriva DiceRolled.
 */
class PingEvent implements ShouldBroadcastNow
{
    use Dispatchable;

    public function __construct(public string $message) {}

    public function broadcastOn(): Channel
    {
        return new Channel('test');
    }
}
