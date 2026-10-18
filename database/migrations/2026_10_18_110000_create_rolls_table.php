<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('rolls', function (Blueprint $table) {
            $table->id();
            $table->foreignId('room_id')->constrained()->cascadeOnDelete();
            $table->foreignId('participant_id')->constrained()->cascadeOnDelete();
            $table->json('dice');
            $table->json('values');
            $table->unsignedInteger('seed');
            $table->unsignedInteger('total');
            $table->timestamp('created_at')->useCurrent();

            $table->index(['room_id', 'id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('rolls');
    }
};
