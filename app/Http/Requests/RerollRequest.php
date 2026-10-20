<?php

namespace App\Http\Requests;

use App\Models\Roll;
use Illuminate\Foundation\Http\FormRequest;

class RerollRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * L'origine è solo grafica (da dove riparte il dado) e non influisce sul valore.
     * Il massimo di `index` dipende dal lancio e lo controlla RollService.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'index' => ['required', 'integer', 'min:0'],
            'origin' => ['required', 'array'],
            'origin.x' => ['required', 'numeric', 'between:-'.Roll::TRAY_R.','.Roll::TRAY_R],
            'origin.z' => ['required', 'numeric', 'between:-'.Roll::TRAY_A.','.Roll::TRAY_A],
        ];
    }

    /** @return array<string, string> */
    public function messages(): array
    {
        return [
            'index.required' => 'Scegli il dado da rilanciare.',
            'index.integer' => 'Dado non valido.',
            'index.min' => 'Dado non valido.',
            'origin.required' => 'Manca il punto di partenza del dado.',
            'origin.x.required' => 'Manca il punto di partenza del dado.',
            'origin.z.required' => 'Manca il punto di partenza del dado.',
            'origin.x.between' => 'Il dado deve stare dentro la vaschetta.',
            'origin.z.between' => 'Il dado deve stare dentro la vaschetta.',
            'origin.x.numeric' => 'Punto di partenza non valido.',
            'origin.z.numeric' => 'Punto di partenza non valido.',
        ];
    }
}
