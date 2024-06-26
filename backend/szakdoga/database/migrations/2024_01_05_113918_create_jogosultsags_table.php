<?php

use App\Models\Jogosultsag;
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
        Schema::create('jogosultsags', function (Blueprint $table) {
            $table->id('jogId');
            $table->string('megnevezes');
            $table->timestamps();
        });


        Jogosultsag::create(["megnevezes"=>"Diák"]);
        Jogosultsag::create(["megnevezes"=>"Cég"]);
        Jogosultsag::create(["megnevezes"=>"Admin"]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jogosultsags');
    }
};
