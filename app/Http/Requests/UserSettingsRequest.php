<?php

namespace App\Http\Requests;

use App\Services\SettingsService;
use Illuminate\Foundation\Http\FormRequest;

class UserSettingsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // la rotta è già protetta da auth + role:user
    }

    /** @return array<string, mixed> */
    public function rules(): array
    {
        return [
            'table_expire_hours' => ['required', 'integer', 'between:'.implode(',', SettingsService::EXPIRE_HOURS)],
            'table_max_participants' => ['required', 'integer', 'between:'.implode(',', SettingsService::USER_PARTICIPANTS)],
            'table_history_limit' => ['required', 'integer', 'between:'.implode(',', SettingsService::HISTORY)],
            'table_full_message' => ['nullable', 'string', 'max:500'],
        ];
    }

    /** @return array<string, string> */
    public function attributes(): array
    {
        return [
            'table_expire_hours' => 'scadenza del tavolo',
            'table_max_participants' => 'giocatori per tavolo',
            'table_history_limit' => 'lanci nello storico',
            'table_full_message' => 'messaggio a tavolo pieno',
        ];
    }
}
