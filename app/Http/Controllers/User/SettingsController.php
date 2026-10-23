<?php

namespace App\Http\Controllers\User;

use App\Http\Requests\UserSettingsRequest;
use App\Services\SettingsService;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

/** Regole dei tavoli creati dall'utente: sovrascrivono quelle dell'admin. */
class SettingsController extends UserController
{
    public function __construct(private SettingsService $settings) {}

    public function edit(): View
    {
        $user = auth()->user();

        return view('user.settings.edit', [
            // Valori in vigore: quelli dell'utente se li ha impostati, altrimenti i predefiniti dell'admin.
            'expireHours' => $user->table_expire_hours ?? $this->settings->expireHours(),
            'maxParticipants' => $user->table_max_participants ?? $this->clampParticipants($this->settings->maxParticipants()),
            'historyLimit' => $user->table_history_limit ?? $this->settings->historyLimit(),
            'fullMessage' => $user->table_full_message ?? $this->settings->roomFullTemplate(),
            'customized' => collect(['table_expire_hours', 'table_max_participants', 'table_history_limit', 'table_full_message'])
                ->contains(fn ($column) => $user->{$column} !== null),
        ]);
    }

    public function update(UserSettingsRequest $request): RedirectResponse
    {
        $this->settings->saveUser($request->user(), $request->validated());

        return redirect()->route('user.settings.edit')->with('saved', true);
    }

    /** Torna alle regole predefinite dell'admin. */
    public function reset(): RedirectResponse
    {
        $this->settings->saveUser(auth()->user(), []);

        return redirect()->route('user.settings.edit')->with('reset', true);
    }

    /** Lo slider dell'utente parte da 2–10: se l'admin non ha limite (0) o ne ha uno fuori range, propone il valore più vicino. */
    private function clampParticipants(int $value): int
    {
        return min(SettingsService::USER_PARTICIPANTS[1], max(SettingsService::USER_PARTICIPANTS[0], $value ?: SettingsService::USER_PARTICIPANTS[1]));
    }
}
