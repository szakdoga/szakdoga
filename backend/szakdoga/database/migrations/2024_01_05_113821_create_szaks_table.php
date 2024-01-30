<?php

use App\Models\Szak;
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
        Schema::create('szaks', function (Blueprint $table) {
            $table->id('szakId');
            $table->string('megnevezes');
            $table->timestamps();
        });

        Szak::create(["megnevezes"=>"Szoftver"]);
        Szak::create(["megnevezes"=>"Iru"]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('szaks');
    }
    
};
