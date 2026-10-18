<?php

namespace App\Models;

use App\Services\PresenceService;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Participant extends Model
{
    use HasFactory;

    protected $fillable = [
        'room_id',
        'nickname',
        'color',
        'online',
        'last_seen_at',
    ];

    protected function casts(): array
    {
        return [
            'online' => 'boolean',
            'last_seen_at' => 'datetime',
        ];
    }

    /**
     * Chi è online adesso: segnato online e con un heartbeat recente.
     *
     * @param  Builder<Participant>  $query
     * @return Builder<Participant>
     */
    public function scopeOnline(Builder $query): Builder
    {
        return $query->where('online', true)
            ->where('last_seen_at', '>=', now()->subSeconds(PresenceService::STALE_SECONDS));
    }

    /** @return HasMany<Roll, $this> */
    public function rolls(): HasMany
    {
        return $this->hasMany(Roll::class);
    }

    /** @return BelongsTo<Room, $this> */
    public function room(): BelongsTo
    {
        return $this->belongsTo(Room::class);
    }

    /**
     * Forma per lista partecipanti ed evento ParticipantJoined.
     *
     * @return array{id: int, nickname: string, color: string}
     */
    public function toPayload(): array
    {
        return ['id' => $this->id, 'nickname' => $this->nickname, 'color' => $this->color];
    }
}
