<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Request;

class ControllerAPI extends Controller {



    public function api(){
        $req = Request::all();

        $paciente = $req['CPF'];
        $data = date("F j, Y, g:i a");
        $receita = $req['receita'];
        $exame = $req['exame'];
        $especialista = $req['especialista'];
        $medicamentos = $req['medicamentos'];
        $medico = $req['CRM'];
        $insertDocumento = DB::insert("insert into documento (paciente, data, receita, exame,especialista, medicamento,
         medico) values (?,?,?,?,?,?,?)", [$paciente, $data,$receita, $exame, $especialista,$medicamentos,$medico]);
    }


}