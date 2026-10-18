<?php

namespace App\Http\Requests;

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
            'max_rooms' => ['required', 'integer', 'min:1', 'max:100'],
            'max_participants' => ['required', 'integer', 'min:1', 'max:50'],
            'rooms_limit_message' => ['nullable', 'string', 'max:500'],
        ];
    }

    /** @return array<string, string> */
    public function attributes(): array
    {
        return [
            'max_rooms' => 'numero massimo di tavoli',
            'max_participants' => 'numero massimo di partecipanti',
            'rooms_limit_message' => 'messaggio',
        ];
    }
}
