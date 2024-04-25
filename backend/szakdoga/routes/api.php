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
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

//Szak
Route::get('/szakok', [SzakController::class, 'index']);
Route::post('/szakok/create', [SzakController::class, 'store']);
Route::get('/szakok/{id}', [SzakController::class, 'show']);
Route::put('/szakok/edit/{id}', [SzakController::class, 'update']);
//Jogosultsag
Route::get('/jogosultsagok', [JogosultsagController::class, 'index']);
Route::post('/jogosultsagok/create', [JogosultsagController::class, 'store']);
Route::get('/jogosultsagok/{id}', [JogosultsagController::class, 'show']);
Route::put('/jogosultsagok/{id}/edit', [JogosultsagController::class, 'update']);
//Felhasznalo
Route::get('/felhasznalok', [FelhasznaloController::class, 'index']);
Route::post('/felhasznalok/create', [FelhasznaloController::class, 'store']);
Route::get('/felhasznalok/{id}', [FelhasznaloController::class, 'show']);
Route::put('/felhasznalok/{id}/edit', [FelhasznaloController::class, 'update']);
Route::delete('/felhasznalok/{id}/delete', [FelhasznaloController::class, 'destroy']);
Route::post('/login', [FelhasznaloController::class, 'login']);
Route::get('/get_user_adat/{felNev}', [FelhasznaloController::class, 'getUserData']);
// Diak
Route::get('/diakok', [DiakController::class, 'index']);
Route::get('/diakok/szak', [DiakController::class, 'diakokSzakjai']);
Route::get('/diakok/lista', [DiakController::class, 'listDiakok']);
Route::get('/diakok/nevid', [DiakController::class, 'diakKapcsolat']);
Route::post('/diakok/create', [DiakController::class, 'store']);
Route::get('/diakok/{id}', [DiakController::class, 'show']);
Route::put('/diakok/{userId}/edit', [DiakController::class, 'update']);

//Ceg
Route::get('/cegek', [CegController::class, 'index']);
Route::get('/cegek/Adat', [CegController::class, 'cegekProfil']);
Route::get('/cegek/lista', [CegController::class, 'listCegek']);
Route::get('/cegek/nevid', [CegController::class, 'cegKapcsolat']);
Route::post('/cegek/create', [CegController::class, 'store']);
Route::get('/cegek/{id}', [CegController::class, 'show']);
Route::put('/cegek/{id}/edit', [CegController::class, 'update']);

//Admin
Route::get('/admin', [AdminController::class, 'index']);
Route::post('/admin/create', [AdminController::class, 'store']);
Route::get('/admin/{id}', [AdminController::class, 'show']);
Route::put('/admin/{id}/edit', [AdminController::class, 'update']);
//Kovetelmeny
Route::get('/kovetelmenyek', [KovetelmenyController::class, 'index']);
Route::post('/kovetelmenyek/create', [KovetelmenyController::class, 'store']);
Route::get('/kovetelmenyek/{id}', [KovetelmenyController::class, 'show']);
Route::put('/kovetelmenyek/{id}/edit', [KovetelmenyController::class, 'update']);
//Preferáltcég
Route::get('/preferalt', [PreferaltCegController::class, 'index']);
Route::post('/preferalt/create/{diakId}/{cegId}', [PreferaltCegController::class, 'store']);
Route::get('/preferalt/{id}', [PreferaltCegController::class, 'show']);
Route::put('/preferalt/{id}/edit', [PreferaltCegController::class, 'update']);
Route::get('/preferalt_cegek', [PreferaltCegController::class, 'preferaltCegTabla']);
//C_D_Kapcsolat
Route::get('/kapcsolatok', [CDKapcsolatController::class, 'index']);
Route::get('/kapcsolatokNeve', [CDKapcsolatController::class, 'cdNevek']);
Route::post('/kapcsolatok/create', [CDKapcsolatController::class, 'store']);
Route::get('/kapcsolatok/{id}', [CDKapcsolatController::class, 'show']);
Route::put('/kapcsolatok/{id}/edit', [CDKapcsolatController::class, 'update']);
Route::delete('/cd_torles/{diakId}/{cegId}', [CDKapcsolatController::class, 'cdTorles']);