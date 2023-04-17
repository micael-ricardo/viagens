<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('passageiro', function (Blueprint $table) {
            $table->id();
            $table->char('nome', 45);
            $table->char('rg', 45);
            $table->char('cpf', 11)->unique();
            $table->char('telefone', 15);
            $table->dateTime('data_cadastro', $precision = 0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('passageiro');
    }
};
