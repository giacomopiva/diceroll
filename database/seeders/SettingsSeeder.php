<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /** Valori iniziali dei limiti (da config/tavolo.php). Non tocca quelli già salvati dall'admin. */
    public function run(): void
    {
        foreach (['max_rooms', 'max_participants', 'rooms_limit_message'] as $key) {
            Setting::firstOrCreate(['key' => $key], ['value' => (string) config('tavolo.'.$key)]);
        }
    }
}
