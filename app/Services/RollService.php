<?php

namespace App\Services;

use App\Events\DiceRolled;
use App\Models\Participant;
use App\Models\Roll;
use App\Models\Room;
use Illuminate\Broadcasting\BroadcastException;

class RollService
{
    /**
     * Lancia i dadi: valori e seed li decide solo il server.
     * Il lancio viene trasmesso agli altri browser (non a chi lo ha fatto, che anima dalla risposta HTTP).
     *
     * @param  list<string>  $dice  tipi già validati (chiavi di Roll::SIDES)
     */
    public function roll(Room $room, Participant $participant, array $dice): Roll
    {
        $values = array_map(fn (string $type) => random_int(1, Roll::SIDES[$type]), $dice);

        $roll = $room->rolls()->create([
            'participant_id' => $participant->id,
            'dice' => $dice,
            'values' => $values,
            'seed' => random_int(1, Roll::MAX_SEED),
            'total' => array_sum($values),
        ]);

        $room->update(['last_activity_at' => now()]);

        // Il lancio è già salvato: se Reverb non risponde chi lancia lo vede lo stesso,
        // gli altri lo ritrovano nello storico al prossimo caricamento. L'errore va nel log.
        try {
            broadcast(new DiceRolled($roll))->toOthers();
        } catch (BroadcastException $e) {
            report($e);
        }

        return $roll;
    }
}
