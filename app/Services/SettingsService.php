<?php

namespace App\Services;

use App\Models\Room;
use App\Models\Setting;
use App\Models\User;

/**
 * Parametri dei tavoli configurabili da admin; senza valore salvato valgono i default di config/tavolo.php.
 * Tutte le letture di questi parametri passano da qui. Scadenza, giocatori, storico e messaggio a tavolo pieno
 * possono essere sovrascritti dal proprietario del tavolo (User::table_*): passando il tavolo vale la regola
 * dell'utente se l'ha impostata, altrimenti quella dell'admin (i tavoli dei guest seguono sempre l'admin).
 * Registrato come scoped: una sola query per richiesta.
 */
class SettingsService
{
    public const KEYS = ['expire_after_hours', 'max_rooms', 'max_participants', 'rooms_limit_message', 'room_full_message', 'history_limit'];

    public const EXPIRE_HOURS = [1, 24];

    public const HISTORY = [10, 100];

    /** Giocatori per tavolo che un utente può scegliere. */
    public const USER_PARTICIPANTS = [2, 10];

    /** @var array<string, string|null>|null */
    private ?array $values = null;

    /** Ore senza attività dopo cui un tavolo scade (1–24). Vale subito per tutti i tavoli. */
    public function expireHours(?Room $room = null): int
    {
        return $this->clamp($room?->user?->table_expire_hours ?? $this->int('expire_after_hours'), ...self::EXPIRE_HOURS);
    }

    /** Scadenza da mostrare nei testi: "1 ora", "24 ore". */
    public function expireLabel(?Room $room = null): string
    {
        $hours = $this->expireHours($room);

        return $hours.' '.($hours === 1 ? 'ora' : 'ore');
    }

    /** Numero massimo di tavoli aperti (non scaduti) contemporaneamente; 0 = nessun limite. */
    public function maxRooms(): int
    {
        return max(0, $this->int('max_rooms'));
    }

    public function hasRoomsLimit(): bool
    {
        return $this->maxRooms() > 0;
    }

    /** Numero massimo di partecipanti online in un tavolo; 0 = nessun limite. */
    public function maxParticipants(?Room $room = null): int
    {
        $own = $room?->user?->table_max_participants;

        return $own !== null
            ? $this->clamp($own, ...self::USER_PARTICIPANTS)
            : max(0, $this->int('max_participants'));
    }

    public function hasParticipantsLimit(?Room $room = null): bool
    {
        return $this->maxParticipants($room) > 0;
    }

    /** Messaggio mostrato quando non si possono aprire altri tavoli. */
    public function roomsLimitMessage(): string
    {
        return $this->text('rooms_limit_message');
    }

    /** Messaggio a tavolo pieno, con :max sostituito dal numero massimo di giocatori. */
    public function roomFullMessage(?Room $room = null): string
    {
        $own = trim((string) $room?->user?->table_full_message);

        return str_replace(':max', (string) $this->maxParticipants($room), $own !== '' ? $own : $this->roomFullTemplate());
    }

    /** Messaggio a tavolo pieno così come si scrive nel pannello, con :max. */
    public function roomFullTemplate(): string
    {
        return $this->text('room_full_message');
    }

    /** Lanci recenti mostrati a chi entra e tenuti nel registro (10–100). */
    public function historyLimit(?Room $room = null): int
    {
        return $this->clamp($room?->user?->table_history_limit ?? $this->int('history_limit'), ...self::HISTORY);
    }

    /**
     * Salva le regole personali di un utente; null (o testo vuoto, o uguale a quello dell'admin) = segue l'admin.
     *
     * @param  array<string, mixed>  $values
     */
    public function saveUser(User $user, array $values): void
    {
        $message = trim((string) ($values['table_full_message'] ?? ''));

        $user->update([
            'table_expire_hours' => $values['table_expire_hours'] ?? null,
            'table_max_participants' => $values['table_max_participants'] ?? null,
            'table_history_limit' => $values['table_history_limit'] ?? null,
            'table_full_message' => $message !== '' && $message !== $this->roomFullTemplate() ? $message : null,
        ]);
    }

    /**
     * Valore iniziale di una chiave per il seeder: il default di config, già riportato nel range valido.
     */
    public function defaultFor(string $key): string
    {
        $value = config('tavolo.'.$key);

        return (string) match ($key) {
            'expire_after_hours' => $this->clamp((int) $value, ...self::EXPIRE_HOURS),
            'history_limit' => $this->clamp((int) $value, ...self::HISTORY),
            'max_rooms', 'max_participants' => max(0, (int) $value),
            default => $value,
        };
    }

    /** @param  array<string, mixed>  $values */
    public function save(array $values): void
    {
        foreach (self::KEYS as $key) {
            if (array_key_exists($key, $values)) {
                Setting::updateOrCreate(['key' => $key], ['value' => $values[$key]]);
            }
        }

        $this->values = null;
    }

    private function int(string $key): int
    {
        return (int) ($this->get($key) ?? config('tavolo.'.$key));
    }

    /** Testo salvato, o il default se vuoto. */
    private function text(string $key): string
    {
        $message = trim((string) $this->get($key));

        return $message !== '' ? $message : (string) config('tavolo.'.$key);
    }

    private function get(string $key): ?string
    {
        $this->values ??= Setting::pluck('value', 'key')->all();
        $value = $this->values[$key] ?? null;

        return $value === '' ? null : $value;
    }

    private function clamp(int $value, int $min, int $max): int
    {
        return min($max, max($min, $value));
    }
}
