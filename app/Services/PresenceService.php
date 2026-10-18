<?php

namespace App\Services;

use App\Events\ParticipantJoined;
use App\Events\ParticipantLeft;
use App\Models\Participant;
use App\Models\Room;
use App\Support\SafeBroadcast;
use Illuminate\Database\Eloquent\Collection;

/**
 * Chi è al tavolo, senza presence channel: heartbeat dal client ogni ~20 s, pagehide che avvisa
 * l'uscita, e chi non dà segni di vita da STALE_SECONDS viene tolto alla prima occasione
 * (il controllo gira a ogni heartbeat degli altri, quindi senza scheduler).
 */
class PresenceService
{
    public const STALE_SECONDS = 50;

    /** @return Collection<int, Participant> */
    public function online(Room $room): Collection
    {
        return $room->participants()
            ->where('online', true)
            ->where('last_seen_at', '>=', now()->subSeconds(self::STALE_SECONDS))
            ->orderBy('id')
            ->get();
    }

    /** Segna il partecipante online; se prima non lo era (o era scaduto) lo annuncia al tavolo. */
    public function touch(Participant $participant): void
    {
        $wasOnline = $participant->online
            && $participant->last_seen_at?->gte(now()->subSeconds(self::STALE_SECONDS));

        $participant->update(['online' => true, 'last_seen_at' => now()]);

        if (! $wasOnline) {
            SafeBroadcast::send(new ParticipantJoined($participant));
        }
    }

    public function heartbeat(Participant $participant): void
    {
        $this->touch($participant);
        $this->sweep($participant->room);
    }

    public function leave(Participant $participant): void
    {
        if (! $participant->online) {
            return;
        }

        $participant->update(['online' => false]);
        SafeBroadcast::send(new ParticipantLeft($participant));
    }

    /** Toglie chi risulta online ma non dà segni di vita da troppo. */
    public function sweep(Room $room): void
    {
        $room->participants()
            ->where('online', true)
            ->where('last_seen_at', '<', now()->subSeconds(self::STALE_SECONDS))
            ->get()
            ->each(fn (Participant $stale) => $this->leave($stale));
    }
}
