<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('table_logo_vertical', 6)->nullable();   // top | bottom
            $table->unsignedTinyInteger('table_logo_size')->nullable(); // 100 | 75 | 50 (% della dimensione piena)
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['table_logo_vertical', 'table_logo_size']);
        });
    }
};
