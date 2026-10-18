<?php

namespace Database\Factories;

use App\Models\Participant;
use App\Models\Room;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Participant> */
class ParticipantFactory extends Factory
{
    public function definition(): array
    {
        return [
            'room_id' => Room::factory(),
            'nickname' => fake()->firstName(),
            'color' => '#1f8a5b',
            'online' => false,
            'last_seen_at' => null,
        ];
    }
}
