<?php

namespace App\Http\Controllers;

use App\Models\Ceg;
use Illuminate\Http\Request;

class CegController extends Controller
{
    public function index()
    {
        return Ceg::all();
    }

    public function store(Request $request)
    {
        $ceg = new Ceg();
        $ceg->fill($request->all());
        $ceg->save();

        return $ceg;
    }

    public function show($id)
    {
        return Ceg::find($id);
    }

    public function update(Request $request, $id)
    {
        $ceg = Ceg::find($id);
        if ($ceg) {
            $ceg->fill($request->all());
            $ceg->save();
        }

        return $ceg;
    }

    public function destroy($id)
    {
        $ceg = Ceg::find($id);
        if ($ceg) {
            $ceg->delete();
        }
    }
}
