<?php

use App\Models\Diak;
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
        Schema::create('diaks', function (Blueprint $table) {
            $table->string('nev');
            $table->date('szulDatum');
            $table->string('email')->unique();
            $table->string('tel');
            $table->string('fax');
            $table->string('lakcim');
            $table->string('neme');
            $table->string('allampolg');
            $table->foreignId('szakId')->references('szakId')->on('szaks');
            $table->foreignId('userId')->references('userId')->on('felhasznalos');
            $table->timestamps();
        });

        Diak::create(['nev' => 'Nagy Jenő','szulDatum' => "2002-12-12",'email' => "jenonagy@gmal.com",'tel' => "06301239876",'fax' => "06301239876",'lakcim' => "Az utca 12",'neme' => "Férfi",'allampolg' => "Szerb",'szakId' => 2,'userId' => 1]);
        Diak::create(['nev' => 'Kis Géza','szulDatum' => "2004-02-12",'email' => "kisgezu@gmal.com",'tel' => "06201239876",'fax' => "06201239876",'lakcim' => "Kertész utca 12",'neme' => "Férfi",'allampolg' => "Magyar",'szakId' => 3,'userId' => 2]);
        Diak::create(['nev' => 'Mili Sanyi','szulDatum' => "2003-04-30",'email' => "milisanyi@gmal.com",'tel' => "06309871234",'fax' => "06309871234",'lakcim' => "Kerek ut 6",'neme' => "Férfi",'allampolg' => "Magyar",'szakId' => 1,'userId' => 4]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('diaks');
    }
};
