<?php

namespace App\Http\Controllers;

use App\Models\Szak;
use Illuminate\Http\Request;

class SzakController extends Controller
{
    public function index()
    {
        return Szak::all();
    }

    public function store(Request $request)
    {
        $szak = new Szak();
        $szak->megnevezes = $request->megnevezes;
        $szak->save();

        return $szak;
    }

    public function show($id)
    {
        return Szak::find($id);
    }

    public function update(Request $request, $id)
    {
        $szak = Szak::find($id);
        if ($szak) {
            $szak->megnevezes = $request->megnevezes;
            $szak->save();
        }

        return $szak;
    }

    public function destroy($id)
    {
        $szak = Szak::find($id);
        if ($szak) {
            $szak->delete();
        }
    }
}
