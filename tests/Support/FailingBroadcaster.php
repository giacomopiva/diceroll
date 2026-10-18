<?php

namespace Tests\Support;

use Illuminate\Broadcasting\Broadcasters\Broadcaster;
use Illuminate\Broadcasting\BroadcastException;
use Illuminate\Support\Facades\Broadcast;

/** Broadcaster che fallisce sempre, come Reverb spento, senza dipendere dall'ambiente. */
class FailingBroadcaster extends Broadcaster
{
    public static function install(): void
    {
        Broadcast::extend('failing', static fn () => new FailingBroadcaster);
        config([
            'broadcasting.default' => 'failing',
            'broadcasting.connections.failing' => ['driver' => 'failing'],
        ]);
    }

    public function auth($request)
    {
        return true;
    }

    public function validAuthenticationResponse($request, $result)
    {
        return true;
    }

    public function broadcast(array $channels, $event, array $payload = [])
    {
        throw new BroadcastException('Reverb non raggiungibile (test).');
    }
}
