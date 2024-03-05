<?php

use App\Models\Ceg;
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
        Schema::create('cegs', function (Blueprint $table) {
            $table->string('neve');
            $table->string('tel');
            $table->string('kapcsNeve');
            $table->string('cim');
            $table->string('email')->unique();
            $table->foreignId('userId')->references('userId')->on('felhasznalos');
            $table->timestamps();
        });


        Ceg::create(["neve"=>"Kis kft","tel"=>"063050443","kapcsNeve"=>"Kiss Gábor","cim"=>"Kis utca","email"=>"kisgabor@gmail.com","userId"=>3]);
        Ceg::create(["neve"=>"Nagy kft","tel"=>"064060143","kapcsNeve"=>"Nagy Gábor","cim"=>"Nagy utca","email"=>"nagygabor@gmail.com","userId"=>5]);
        Ceg::create(["neve"=>"MegaLedKft","tel"=>"062030143","kapcsNeve"=>"Közepes Tamás","cim"=>"Fogeresi út","email"=>"megaledkft@gmail.com","userId"=>6]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cegs');
    }
};
