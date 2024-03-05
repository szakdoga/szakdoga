<?php

use App\Models\Felhasznalo;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
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
        Schema::create('felhasznalos', function (Blueprint $table) {
            $table->id('userId');
            $table->string('felNev')->unique();
            $table->string('jelszo');
            $table->foreignId('jogId')->references('jogId')->on('jogosultsags');
            $table->timestamps();
        });
        
 
        
        
        Felhasznalo::create(['felNev' => 'Jenő','jelszo' => Hash::make('blabla'),'jogId' => 1]);
        Felhasznalo::create(['felNev' => 'Géza','jelszo' => Hash::make('abla'),'jogId' => 1]);
        Felhasznalo::create(['felNev' => 'Gizikft','jelszo' => Hash::make('ablaaa'),'jogId' => 2]);
        Felhasznalo::create(['felNev' => 'Sanyi','jelszo' => Hash::make('Sanyi123'),'jogId' => 1]);
        Felhasznalo::create(['felNev' => 'Dominik','jelszo' => Hash::make('Dominik123'),'jogId' => 2]);
        Felhasznalo::create(['felNev' => 'MegaLed','jelszo' => Hash::make('MegaLed123'),'jogId' => 2]);
        Felhasznalo::create(['felNev' => 'Admin','jelszo' => Hash::make('Admin123'),'jogId' => 3]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('felhasznalos');
    }
};
