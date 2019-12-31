<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    //
    //
    public function index(Request $request){
        $username = $request->input('username');
        $password = $request->input('password');
        if ($username !== "17111004") {
            $response = array("code"=> 201,
            "title"=> "login",
            "message"=> "username belum terdaftar",
            "data"=> []);
            return json_encode($response);
        }
        if ($username === "17111004" && $password === "111") {
            $response = array("code"=> 200,
            "title"=> "login",
            "message"=> "login success",
            "data"=> []);
            return json_encode($response);
        } else {
            $response = array("code"=> 210,
            "title"=> "login",
            "message"=> "username atau password salah",
            "data"=> []);
            return json_encode($response);
        }
    }
}
