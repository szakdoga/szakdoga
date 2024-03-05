<?php

use App\Models\PreferaltCeg;
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
        Schema::create('preferalt_cegs', function (Blueprint $table) {
            $table->primary(['diakId', 'cegId']);
            $table->foreignId('diakId')->references('userId')->on('diaks');
            $table->foreignId('cegId')->references('userId')->on('cegs');
            $table->timestamps();
        });

        
        PreferaltCeg::create(["diakId"=>1,"cegId"=>6]);
        PreferaltCeg::create(["diakId"=>1,"cegId"=>3]);
        PreferaltCeg::create(["diakId"=>2,"cegId"=>5]);
        PreferaltCeg::create(["diakId"=>2,"cegId"=>6]);
        PreferaltCeg::create(["diakId"=>4,"cegId"=>3]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('preferalt_cegs');
    }
};
