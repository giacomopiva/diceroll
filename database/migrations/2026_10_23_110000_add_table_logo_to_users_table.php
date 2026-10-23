<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Immagine mostrata nell'intestazione dei tavoli dell'utente; null = nessuna.
        Schema::table('users', function (Blueprint $table) {
            $table->string('table_logo_path')->nullable();
            $table->string('table_logo_position', 6)->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['table_logo_path', 'table_logo_position']);
        });
    }
};
