<?php

namespace App\Http\Requests;

use App\Services\SettingsService;
use Illuminate\Foundation\Http\FormRequest;

class SettingsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // la rotta è già protetta da auth + role:admin
    }

    /** @return array<string, mixed> */
    public function rules(): array
    {
        return [
            'expire_after_hours' => ['required', 'integer', 'between:'.implode(',', SettingsService::EXPIRE_HOURS)],
            // 0 = nessun limite; il massimo è solo una soglia di sicurezza.
            'max_rooms' => ['required', 'integer', 'min:0', 'max:100000'],
            'max_participants' => ['required', 'integer', 'min:0', 'max:1000'],
            'rooms_limit_message' => ['nullable', 'string', 'max:500'],
            'room_full_message' => ['nullable', 'string', 'max:500'],
            'history_limit' => ['required', 'integer', 'between:'.implode(',', SettingsService::HISTORY)],
        ];
    }

    /** @return array<string, string> */
    public function attributes(): array
    {
        return [
            'expire_after_hours' => 'scadenza del tavolo',
            'max_rooms' => 'numero massimo di tavoli',
            'max_participants' => 'numero massimo di partecipanti',
            'rooms_limit_message' => 'messaggio a tavoli esauriti',
            'room_full_message' => 'messaggio a tavolo pieno',
            'history_limit' => 'lanci nello storico',
        ];
    }
}
