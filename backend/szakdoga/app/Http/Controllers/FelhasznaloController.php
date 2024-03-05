<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class FelhasznaloController extends Controller
{
    public function index()
    {
        return Felhasznalo::all();
    }

    public function store(Request $request)
    {
        $felhasznalo = new Felhasznalo();
        $felhasznalo->felNev = $request->felNev;
        $felhasznalo->jelszo = $request->jelszo;
        $felhasznalo->jogId = $request->jogId;
        $felhasznalo->save();

        return $felhasznalo;
    }

    public function show($id)
    {
        return Felhasznalo::find($id);
    }

    public function update(Request $request, $id)
    {
        $felhasznalo = Felhasznalo::find($id);
        if ($felhasznalo) {
            $felhasznalo->felNev = $request->felNev;
            $felhasznalo->jelszo = $request->jelszo;
            $felhasznalo->jogId = $request->jogId;
            $felhasznalo->save();
        }

        return $felhasznalo;
    }

    public function destroy($id)
    {
        $felhasznalo = Felhasznalo::find($id);
        if ($felhasznalo) {
            $felhasznalo->delete();
        }
    }

    public function login(Request $request)
{
    $request->validate([
        'felNev' => 'required|string',
        'jelszo' => 'required|string',
    ]);
    
    $felhasznalo = Felhasznalo::where('felNev', $request->felNev)->first();

    if (!$felhasznalo || !Hash::check($request->jelszo, $felhasznalo->jelszo)) {
        return response()->json(['message' => 'Hibás felhasználónév vagy jelszó!'], 401);
    }

    Auth::loginUsingId($felhasznalo->id);

    $token = $felhasznalo->createToken('api-token')->plainTextToken;
    return response()->json(['message' => 'Sikeres bejelentkezés!', 'token' => $token]);
}

    
}
