<?php

namespace App\Models;

use App\Services\SettingsService;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property Carbon|null $last_activity_at
 */
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

    /** Istante prima del quale l'ultima attività rende scaduto un tavolo. */
    public static function expiryCutoff(): Carbon
    {
        return now()->subHours(app(SettingsService::class)->expireHours());
    }

    /**
     * @param  Builder<Room>  $query
     * @return Builder<Room>
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('last_activity_at', '>=', self::expiryCutoff());
    }

    /**
     * @param  Builder<Room>  $query
     * @return Builder<Room>
     */
    public function scopeExpired(Builder $query): Builder
    {
        return $query->where(fn (Builder $q) => $q->whereNull('last_activity_at')->orWhere('last_activity_at', '<', self::expiryCutoff()));
    }

    public function isExpired(): bool
    {
        return ($this->last_activity_at ?? $this->created_at)->lt(self::expiryCutoff());
    }

    /** Segna attività, ma al massimo una scrittura ogni 5 minuti (per l'apertura della pagina). */
    public function touchActivity(): void
    {
        if ($this->last_activity_at === null || $this->last_activity_at->lt(now()->subMinutes(5))) {
            $this->update(['last_activity_at' => now()]);
        }
    }

    /** Istante dell'ultimo lancio (usa il withMax della lista se presente), null se non ce ne sono. */
    public function lastRollAt(): ?Carbon
    {
        $value = array_key_exists('rolls_max_created_at', $this->attributes)
            ? $this->attributes['rolls_max_created_at']
            : $this->rolls()->max('created_at');

        return $value ? Carbon::parse($value) : null;
    }

    /** Da quanto il tavolo è attivo: dalla creazione a ora (o all'ultima attività, se è scaduto). */
    public function activeFor(): string
    {
        $end = $this->isExpired() ? ($this->last_activity_at ?? $this->created_at) : now();

        return self::formatMinutes((int) $this->created_at->diffInMinutes($end));
    }

    /** Da quanto non si tira: dall'ultimo lancio, o dalla creazione se nessuno ha ancora tirato. */
    public function idleFor(): string
    {
        return self::formatMinutes((int) ($this->lastRollAt() ?? $this->created_at)->diffInMinutes(now()));
    }

    /** 35 min · 2 h 15 min · 3 g 4 h */
    public static function formatMinutes(int $minutes): string
    {
        $minutes = max(0, $minutes);

        return match (true) {
            $minutes < 60 => $minutes.' min',
            $minutes < 1440 => intdiv($minutes, 60).' h '.($minutes % 60).' min',
            default => intdiv($minutes, 1440).' g '.intdiv($minutes % 1440, 60).' h',
        };
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
