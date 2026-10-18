<?php

namespace App\Services;

use App\Models\Setting;

/** Limiti del tavolo configurabili da admin; senza valore salvato valgono i default di config/tavolo.php. */
class SettingsService
{
    public const KEYS = ['max_rooms', 'max_participants', 'rooms_limit_message'];

    /** Numero massimo di tavoli aperti (non scaduti) contemporaneamente. */
    public function maxRooms(): int
    {
        return (int) ($this->get('max_rooms') ?? config('tavolo.max_rooms'));
    }

    /** Numero massimo di partecipanti online in un tavolo. */
    public function maxParticipants(): int
    {
        return (int) ($this->get('max_participants') ?? config('tavolo.max_participants'));
    }

    /** Messaggio mostrato quando non si possono aprire altri tavoli. */
    public function roomsLimitMessage(): string
    {
        $message = trim((string) $this->get('rooms_limit_message'));

        return $message !== '' ? $message : config('tavolo.rooms_limit_message');
    }

    /** @param  array<string, mixed>  $values */
    public function save(array $values): void
    {
        foreach (self::KEYS as $key) {
            if (array_key_exists($key, $values)) {
                Setting::updateOrCreate(['key' => $key], ['value' => $values[$key]]);
            }
        }
    }

    private function get(string $key): ?string
    {
        $value = Setting::find($key)?->value;

        return $value === '' ? null : $value;
    }
}
