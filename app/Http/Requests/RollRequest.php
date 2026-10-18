<?php

namespace App\Http\Requests;

use App\Models\Roll;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RollRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /** @return array<string, mixed> */
    public function rules(): array
    {
        return [
            'dice' => ['required', 'array', 'min:1', 'max:'.Roll::MAX_DICE],
            'dice.*' => ['required', 'string', Rule::in(array_keys(Roll::SIDES))],
        ];
    }

    /** @return array<string, string> */
    public function messages(): array
    {
        return [
            'dice.required' => 'Scegli almeno un dado.',
            'dice.max' => 'Puoi lanciare al massimo '.Roll::MAX_DICE.' dadi.',
            'dice.*.in' => 'Tipo di dado non valido.',
        ];
    }
}
