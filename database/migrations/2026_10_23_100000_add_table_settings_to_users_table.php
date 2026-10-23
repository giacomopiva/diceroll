<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Regole personali per i tavoli creati dall'utente; null = vale il valore dell'admin.
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedTinyInteger('table_expire_hours')->nullable();
            $table->unsignedTinyInteger('table_max_participants')->nullable();
            $table->unsignedTinyInteger('table_history_limit')->nullable();
            $table->string('table_full_message', 500)->nullable();
        });

        // Proprietario del tavolo: null = creato da un guest.
        Schema::table('rooms', function (Blueprint $table) {
            $table->foreignId('user_id')->nullable()->after('id')->constrained()->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('rooms', function (Blueprint $table) {
            $table->dropConstrainedForeignId('user_id');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['table_expire_hours', 'table_max_participants', 'table_history_limit', 'table_full_message']);
        });
    }
};
