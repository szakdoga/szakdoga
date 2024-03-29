<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kovetelmenies', function (Blueprint $table) {
            $table->foreignId('cegId')->references('userId')->on('cegs');
            $table->foreignId('szakId')->references('szakId')->on('szaks');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kovetelmenies');
    }
};
