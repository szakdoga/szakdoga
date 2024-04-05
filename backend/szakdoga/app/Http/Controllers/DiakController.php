<?php

namespace App\Http\Controllers;

use App\Models\Diak;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class DiakController extends Controller
{
    public function index()
    {
        return Diak::all();
    }

    public function store(Request $request)
    {
        $diak = new Diak();
        $diak->fill($request->all());
        $diak->save();

        return $diak;
    }

    public function show($userId)
    {
        return Diak::where('userId', $userId)->get();
    }

    public function update(Request $request, $userId)
    {

        $diak = Diak::find($userId);
        if ($diak) {
            $diak->fill($request->all());
            $diak->save();
        }

        return $diak;
    }

    public function destroy($id)
    {
        $diak = Diak::find($id);
        if ($diak) {
            $diak->delete();
        }
    }

    public function diakokSzakjai()
    {
        return DB::table('diaks')
            ->join('szaks', 'diaks.szakId', '=', 'szaks.szakId')
            ->select('diaks.userId','diaks.nev', 'szaks.megnevezes')
            ->get();
    }
}
