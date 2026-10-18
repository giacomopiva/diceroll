<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class JoinRoomRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /** @return array<string, mixed> */
    public function rules(): array
    {
        return [
            'nickname' => ['required', 'string', 'min:1', 'max:20'],
            'color' => ['required', 'string', 'regex:/^#[0-9a-fA-F]{6}$/'],
        ];
    }

    /** @return array<string, string> */
    public function messages(): array
    {
        return [
            'nickname.required' => 'Scegli un nickname.',
            'nickname.max' => 'Il nickname può avere al massimo 20 caratteri.',
            'color.required' => 'Scegli un colore per i dadi.',
            'color.regex' => 'Il colore non è valido.',
        ];
    }
}
