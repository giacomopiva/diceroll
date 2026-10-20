<?php

namespace App\Services;

use App\Events\DiceRolled;
use App\Models\Participant;
use App\Models\Roll;
use App\Models\Room;
use App\Support\SafeBroadcast;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Validation\ValidationException;

class RollService
{
    private const ALREADY_REROLLED = 'Questo dado è già stato rilanciato.';

    /**
     * Lancia i dadi: valori e seed li decide solo il server.
     * Il lancio viene trasmesso agli altri browser (non a chi lo ha fatto, che anima dalla risposta HTTP).
     *
     * @param  list<string>  $dice  tipi già validati (chiavi di Roll::SIDES)
     */
    public function roll(Room $room, Participant $participant, array $dice): Roll
    {
        $values = array_map(fn (string $type) => random_int(1, Roll::SIDES[$type]), $dice);

        return $this->store($room, $participant, $dice, $values);
    }

    /**
     * Rilancia un singolo dado di un lancio: nuovo valore e nuovo seed decisi dal server.
     * `$origin` è il punto della vaschetta da cui il dado riparte, solo grafica.
     *
     * @param  array{x: float|int, z: float|int}  $origin
     */
    public function reroll(Room $room, Participant $participant, Roll $original, int $index, array $origin): Roll
    {
        abort_unless($original->participant_id === $participant->id, 403, 'Puoi rilanciare solo i tuoi dadi.');

        if (! array_key_exists($index, $original->dice)) {
            throw ValidationException::withMessages(['index' => 'Dado non valido.']);
        }

        abort_if($original->rerolls()->where('reroll_index', $index)->exists(), 409, self::ALREADY_REROLLED);

        $type = $original->dice[$index];
        $value = random_int(1, Roll::SIDES[$type]);
        // Totale del lancio di partenza (con i rilanci già applicati) col dado sostituito.
        $combined = ($original->combined_total ?? $original->total) - $original->values[$index] + $value;

        try {
            return $this->store($room, $participant, [$type], [$value], [
                'reroll_of_id' => $original->id,
                'reroll_index' => $index,
                'origin' => ['x' => round((float) $origin['x'], 2), 'z' => round((float) $origin['z'], 2)],
                'combined_total' => $combined,
            ]);
        } catch (UniqueConstraintViolationException) {
            abort(409, self::ALREADY_REROLLED); // due richieste insieme: vince la prima
        }
    }

    /**
     * Salva il lancio con un seed nuovo, aggiorna l'attività del tavolo e lo trasmette.
     *
     * @param  list<string>  $dice
     * @param  list<int>  $values
     * @param  array<string, mixed>  $extra
     */
    private function store(Room $room, Participant $participant, array $dice, array $values, array $extra = []): Roll
    {
        $roll = $room->rolls()->create([
            'participant_id' => $participant->id,
            'dice' => $dice,
            'values' => $values,
            'seed' => random_int(1, Roll::MAX_SEED),
            'total' => array_sum($values),
        ] + $extra);

        $room->update(['last_activity_at' => now()]);

        // Il lancio è già salvato: se Reverb non risponde chi lancia lo vede lo stesso,
        // gli altri lo ritrovano nello storico al prossimo caricamento.
        SafeBroadcast::send(new DiceRolled($roll), toOthers: true);

        return $roll;
    }
}
