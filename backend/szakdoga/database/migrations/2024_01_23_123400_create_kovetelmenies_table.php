<?php

use App\Models\Kovetelmeny;
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
            $table->integer('fo');
            $table->timestamps();
        });

        Kovetelmeny::create(["cegId"=>3,"szakId"=>1,"fo"=>2]);
        Kovetelmeny::create(["cegId"=>3,"szakId"=>2,"fo"=>1]);
        Kovetelmeny::create(["cegId"=>3,"szakId"=>3,"fo"=>1]);
        Kovetelmeny::create(["cegId"=>5,"szakId"=>1,"fo"=>2]);
        Kovetelmeny::create(["cegId"=>5,"szakId"=>2,"fo"=>1]);
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
