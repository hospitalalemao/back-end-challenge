<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class ClientController extends BaseController
{
    //
    public function __construct(){

    }

    public function getAll(){
        return 'getALL';
    }
    public function get($id){
        return 'get by id: ' . $id;
    }
    public function store(Request $request){
        dd($request->all());
    }
    public function update($id, Request $request){
        dd($id, $request->all());
    }
    public function destroy($id){
        dd($id);
    }
}
