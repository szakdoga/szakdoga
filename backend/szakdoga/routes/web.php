<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CDKapcsolatController;
use App\Http\Controllers\CegController;
use App\Http\Controllers\DiakController;
use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\JogosultsagController;
use App\Http\Controllers\KovetelmenyController;
use App\Http\Controllers\PreferaltCegController;
use App\Http\Controllers\SzakController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('/token', function () {
    return request()->session()->token();
});

require __DIR__.'/auth.php';


