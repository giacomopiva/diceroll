<?php

namespace App\Http\Requests;

use App\Services\AppearanceService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AppearanceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // la rotta è già protetta da auth + role:user
    }

    /** @return array<string, mixed> */
    public function rules(): array
    {
        $limits = config('tavolo.logo');

        return [
            // SVG escluso di proposito: può contenere script.
            'image' => ['nullable', 'file', 'mimes:'.implode(',', $limits['mimes']), 'max:'.$limits['max_kb'],
                'dimensions:max_width='.$limits['max_px'].',max_height='.$limits['max_px']],
            'position' => ['required', Rule::in(array_keys(AppearanceService::POSITIONS))],
            'vertical' => ['nullable', Rule::in(array_keys(AppearanceService::VERTICALS))],
            'size' => ['nullable', 'integer', Rule::in(AppearanceService::SIZES)],
        ];
    }

    /** @return array<string, string> */
    public function attributes(): array
    {
        return ['image' => 'immagine', 'position' => 'posizione', 'vertical' => 'posizione verticale', 'size' => 'dimensione'];
    }
}
