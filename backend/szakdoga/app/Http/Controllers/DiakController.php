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
        DB::enableQueryLog();

        $diakokSzakjai = DB::select("
        SELECT diaks.nev, szaks.megnevezes
        FROM diaks
        INNER JOIN szaks ON diaks.szakId = szaks.szakId
    ");

        return DB::getQueryLog();
    }

    public function listDiakok()
    {
        $diakok = DB::table('diaks')->select('nev', 'szulDatum', 'email', 'tel', 'fax', 'lakcim', 'neme', 'allampolg')->get();

        return response()->json($diakok);
    }

    public function diakKapcsolat()
    {
        $diakok = DB::table('diaks')->select('nev', 'userId')->get();

        return response()->json($diakok);
    }
}
