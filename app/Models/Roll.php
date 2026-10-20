<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Roll extends Model
{
    /** Facce di ogni tipo di dado ammesso. */
    public const SIDES = ['d4' => 4, 'd6' => 6, 'd8' => 8, 'd10' => 10, 'd12' => 12, 'd20' => 20];

    public const MAX_DICE = 40;

    /** Il seed della fisica è un intero 1..2^31-2, come nel client (mulberry32). */
    public const MAX_SEED = 2147483646;

    /** Limiti della vaschetta per l'origine di un rilancio: R (centro-vertice) e apotema R·√3/2, come TRAY in physics.js. */
    public const TRAY_R = 9.2;

    public const TRAY_A = 7.97;

    public const UPDATED_AT = null;

    protected $fillable = [
        'room_id',
        'participant_id',
        'dice',
        'values',
        'seed',
        'total',
        'reroll_of_id',
        'reroll_index',
        'origin',
        'combined_total',
    ];

    protected function casts(): array
    {
        return [
            'dice' => 'array',
            'values' => 'array',
            'seed' => 'integer',
            'total' => 'integer',
            'reroll_index' => 'integer',
            'origin' => 'array',
            'combined_total' => 'integer',
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

    /** @return BelongsTo<Roll, $this> */
    public function rerollOf(): BelongsTo
    {
        return $this->belongsTo(self::class, 'reroll_of_id');
    }

    /** @return HasMany<Roll, $this> */
    public function rerolls(): HasMany
    {
        return $this->hasMany(self::class, 'reroll_of_id');
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
            // Sempre presenti, a null per i lanci normali.
            'reroll_of' => $this->reroll_of_id === null ? null : ['id' => $this->reroll_of_id, 'index' => $this->reroll_index],
            'origin' => $this->origin,
            'combined_total' => $this->combined_total,
        ];
    }
}
