<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('rolls', function (Blueprint $table) {
            $table->foreignId('reroll_of_id')->nullable()->constrained('rolls')->nullOnDelete();
            $table->unsignedTinyInteger('reroll_index')->nullable();
            $table->json('origin')->nullable();
            $table->unsignedInteger('combined_total')->nullable();

            // Un dado si rilancia una volta sola, anche con due richieste insieme.
            $table->unique(['reroll_of_id', 'reroll_index']);
        });
    }

    public function down(): void
    {
        Schema::table('rolls', function (Blueprint $table) {
            $table->dropForeign(['reroll_of_id']);
            $table->dropUnique(['reroll_of_id', 'reroll_index']);
            $table->dropColumn(['reroll_of_id', 'reroll_index', 'origin', 'combined_total']);
        });
    }
};
