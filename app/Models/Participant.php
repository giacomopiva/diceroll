<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
