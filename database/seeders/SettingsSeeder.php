<?php

namespace Database\Seeders;

use App\Models\Setting;
use App\Services\SettingsService;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /** Valori iniziali di tutti i parametri (da config/tavolo.php, nel range valido). Non tocca quelli già salvati dall'admin. */
    public function run(SettingsService $settings): void
    {
        foreach (SettingsService::KEYS as $key) {
            Setting::firstOrCreate(['key' => $key], ['value' => $settings->defaultFor($key)]);
        }
    }
}
