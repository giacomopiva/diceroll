<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Roll extends Model
{
    /** Facce di ogni tipo di dado ammesso. */
    public const SIDES = ['d4' => 4, 'd6' => 6, 'd8' => 8, 'd10' => 10, 'd12' => 12, 'd20' => 20];

    public const MAX_DICE = 40;

    /** Il seed della fisica è un intero 1..2^31-2, come nel client (mulberry32). */
    public const MAX_SEED = 2147483646;

    public const UPDATED_AT = null;

    protected $fillable = [
        'room_id',
        'participant_id',
        'dice',
        'values',
        'seed',
        'total',
    ];

    protected function casts(): array
    {
        return [
            'dice' => 'array',
            'values' => 'array',
            'seed' => 'integer',
            'total' => 'integer',
        ];
    }

    /** @return BelongsTo<Room, $this> */
    public function room(): BelongsTo
    {
        return $this->belongsTo(Room::class);
    }

    /** @return BelongsTo<Participant, $this> */
    public function participant(): BelongsTo
    {
        return $this->belongsTo(Participant::class);
    }

    /** Formula del lancio, per esempio "2d20 + 1d6". */
    public function formula(): string
    {
        $count = array_count_values($this->dice);
        $parts = [];
        foreach (array_keys(self::SIDES) as $type) {
            if (isset($count[$type])) {
                $parts[] = $count[$type].$type;
            }
        }

        return implode(' + ', $parts);
    }

    /**
     * Forma unica del lancio per risposta HTTP, evento e storico.
     *
     * @return array<string, mixed>
     */
    public function toPayload(): array
    {
        $this->loadMissing('participant');

        return [
            'id' => $this->id,
            'player' => [
                'id' => $this->participant->id,
                'nickname' => $this->participant->nickname,
                'color' => $this->participant->color,
            ],
            'dice' => $this->dice,
            'values' => $this->values,
            'seed' => $this->seed,
            'total' => $this->total,
            'created_at' => $this->created_at->toIso8601String(),
        ];
    }
}
