<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalo;
use Illuminate\Http\Request;

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
}
