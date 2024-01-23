<?php

use App\Http\Controllers\CegController;
use App\Http\Controllers\DiakController;
use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\JogosultsagController;
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
    return view('welcome');
});
//Szak
Route::get('/szakok', [SzakController::class, 'index']);
Route::get('/szakok/create', [SzakController::class, 'create']);
Route::get('/szakok/{id}', [SzakController::class, 'show']);
Route::get('/szakok/{id}', [SzakController::class, 'update']);
//Jogosultsag
Route::get('/jogosultsagok', [JogosultsagController::class, 'index']);
Route::get('/jogosultsagok/create', [JogosultsagController::class, 'create']);
Route::get('/jogosultsagok/{id}', [JogosultsagController::class, 'show']);
Route::get('/jogosultsagok/{id}/edit', [JogosultsagController::class, 'update']);
//Felhasznalo
Route::get('/felhasznalok', [FelhasznaloController::class, 'index']);
Route::get('/felhasznalok/create', [FelhasznaloController::class, 'create']);
Route::get('/felhasznalok/{id}', [FelhasznaloController::class, 'show']);
Route::get('/felhasznalok/{id}/edit', [FelhasznaloController::class, 'edit']);
// Diak
Route::get('/diakok', [DiakController::class, 'index']);
Route::get('/diakok/create', [DiakController::class, 'create']);
Route::get('/diakok/{id}', [DiakController::class, 'show']);
Route::get('/diakok/{id}/edit', [DiakController::class, 'edit']);
//Ceg
Route::get('/cegek', [CegController::class, 'index']);
Route::get('/cegek/create', [CegController::class, 'create']);
Route::get('/cegek/{id}', [CegController::class, 'show']);
Route::get('/cegek/{id}/edit', [CegController::class, 'edit']);