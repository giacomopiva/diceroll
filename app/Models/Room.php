<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Room extends Model
{
    use HasFactory;

    /** Alfabeto senza caratteri ambigui (niente i, l, o, 0, 1). */
    public const CODE_ALPHABET = 'abcdefghjkmnpqrstuvwxyz23456789';

    /** Formato xxx-xxx-xxx, usato anche come vincolo della rotta. */
    public const CODE_PATTERN = '[a-hjkmnp-z2-9]{3}-[a-hjkmnp-z2-9]{3}-[a-hjkmnp-z2-9]{3}';

    protected $fillable = [
        'code',
        'last_activity_at',
    ];

    protected function casts(): array
    {
        return [
            'last_activity_at' => 'datetime',
        ];
    }

    public function getRouteKeyName(): string
    {
        return 'code';
    }

    /** @return HasMany<Participant, $this> */
    public function participants(): HasMany
    {
        return $this->hasMany(Participant::class);
    }

    /** @return HasMany<Roll, $this> */
    public function rolls(): HasMany
    {
        return $this->hasMany(Roll::class);
    }

    /** Genera un codice xxx-xxx-xxx non ancora in uso. */
    public static function generateCode(): string
    {
        $max = strlen(self::CODE_ALPHABET) - 1;

        do {
            $groups = [];
            for ($g = 0; $g < 3; $g++) {
                $group = '';
                for ($i = 0; $i < 3; $i++) {
                    $group .= self::CODE_ALPHABET[random_int(0, $max)];
                }
                $groups[] = $group;
            }
            $code = implode('-', $groups);
        } while (static::where('code', $code)->exists());

        return $code;
    }
}
