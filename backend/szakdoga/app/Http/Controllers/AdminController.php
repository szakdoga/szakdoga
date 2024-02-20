<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    //
    public function index()
    {
        return Admin::all();
    }

    public function store(Request $request)
    {
        $admin = new Admin();
        $admin->fill($request->all());
        $admin->save();

        return $admin;
    }

    public function show($id)
    {
        return Admin::find($id);
    }

    public function update(Request $request, $userId)
    {
        $admin = Admin::where('userId', $userId)->first();
        if ($admin) {
            $admin->fill($request->all());
            $admin->save();
        }
        return $admin;
    }

    public function destroy($id)
    {
        $admin = Admin::find($id);
        if ($admin) {
            $admin->delete();
        }
    }
}
