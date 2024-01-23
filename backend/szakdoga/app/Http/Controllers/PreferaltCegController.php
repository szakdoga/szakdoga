<?php

namespace App\Http\Controllers;

use App\Models\PreferaltCeg;
use Illuminate\Http\Request;

class PreferaltCegController extends Controller
{
    
    public function index()
    {
        return PreferaltCeg::all();
    }

    public function store(Request $request)
    {
        $prefceg = new PreferaltCeg();
        $prefceg->diakId = $request->diakId;
        $prefceg->cegId = $request->cegId;
        $prefceg->save();

        return $prefceg;
    }

    public function show($id)
    {
        return PreferaltCeg::find($id);
    }

    public function update(Request $request, $id)
    {
        $prefceg = PreferaltCeg::find($id);
        if ($prefceg) {
            $prefceg->diakId = $request->diakId;
            $prefceg->cegId = $request->cegId;
            $prefceg->save();
        }

        return $prefceg;
    }

    public function destroy($id)
    {
        $prefceg = PreferaltCeg::find($id);
        if ($prefceg) {
            $prefceg->delete();
        }
    }
}
