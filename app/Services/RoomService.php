<?php

namespace App\Services;

use App\Events\ParticipantJoined;
use App\Models\Participant;
use App\Models\Room;
use App\Support\SafeBroadcast;
use Illuminate\Http\Request;

class RoomService
{
    public function createRoom(): Room
    {
        return Room::create([
            'code' => Room::generateCode(),
            'last_activity_at' => now(),
        ]);
    }

    /**
     * Partecipante di questo browser nella stanza, se ha già fatto il join.
     * L'identità sta nella sessione: niente account.
     */
    public function currentParticipant(Room $room, Request $request): ?Participant
    {
        $id = $request->session()->get($this->sessionKey($room));

        return $id ? $room->participants()->find($id) : null;
    }

    /** Entra nella stanza; se il browser è già dentro aggiorna nickname e colore. */
    public function join(Room $room, string $nickname, string $color, Request $request): Participant
    {
        $data = [
            'nickname' => $nickname,
            'color' => strtolower($color),
        ];

        $participant = $this->currentParticipant($room, $request);

        if ($participant) {
            $participant->update($data);
            // Nickname o colore cambiati: chi è già al tavolo aggiorna la lista.
            if ($participant->online) {
                SafeBroadcast::send(new ParticipantJoined($participant));
            }
        } else {
            $participant = $room->participants()->create($data);
            $request->session()->put($this->sessionKey($room), $participant->id);
        }

        $room->update(['last_activity_at' => now()]);

        return $participant;
    }

    /** Il browser smette di essere un partecipante: per tornare serve rifare il join. */
    public function forget(Room $room, Request $request): void
    {
        $request->session()->forget($this->sessionKey($room));
    }

    private function sessionKey(Room $room): string
    {
        return 'participants.'.$room->id;
    }
}
