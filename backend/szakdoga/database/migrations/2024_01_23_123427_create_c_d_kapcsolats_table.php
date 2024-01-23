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
        Schema::create('c_d_kapcsolats', function (Blueprint $table) {
            $table->primary(['diakId', 'cegId']);
            $table->foreignId('diakId')->references('userId')->on('diaks');
            $table->foreignId('cegId')->references('userId')->on('cegs');
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
        Schema::dropIfExists('c_d_kapcsolats');
    }
};
