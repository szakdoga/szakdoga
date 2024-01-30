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

<<<<<<< HEAD

        Szak::create([
            'megnevezes' => "Szoftver", 
        ]);

        Szak::create([
            'megnevezes' => "IRU", 
        ]);
=======
        Szak::create(["megnevezes"=>"Szoftver"]);
        Szak::create(["megnevezes"=>"Iru"]);
>>>>>>> e2679fd8aeb77a733952f66852f23125879d446a
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
