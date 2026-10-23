<?php

namespace App\Http\Controllers\User;

use App\Http\Requests\AppearanceRequest;
use App\Services\AppearanceService;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

/** Aspetto dei tavoli creati dall'utente. */
class AppearanceController extends UserController
{
    public function __construct(private AppearanceService $appearance) {}

    public function edit(): View
    {
        $user = auth()->user();

        return view('user.appearance.edit', [
            'hasImage' => $this->appearance->exists($user->table_logo_path),
            'position' => $user->table_logo_position ?? 'left',
            'vertical' => $user->table_logo_vertical ?? 'top',
            'size' => $user->table_logo_size ?? 100,
            'positions' => AppearanceService::POSITIONS,
            'verticals' => AppearanceService::VERTICALS,
            'sizes' => AppearanceService::SIZES,
            'limits' => config('tavolo.logo'),
        ]);
    }

    public function update(AppearanceRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $this->appearance->save($request->user(), $data['position'], $data['vertical'] ?? null, isset($data['size']) ? (int) $data['size'] : null, $request->file('image'));

        return redirect()->route('user.appearance.edit')->with('saved', true);
    }

    /** Anteprima dell'immagine dell'utente. */
    public function image()
    {
        $path = auth()->user()->table_logo_path;

        abort_unless($this->appearance->exists($path), 404);

        return $this->appearance->response($path);
    }

    public function destroy(): RedirectResponse
    {
        $this->appearance->remove(auth()->user());

        return redirect()->route('user.appearance.edit')->with('removed', true);
    }
}
