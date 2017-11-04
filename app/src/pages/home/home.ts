import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { CadastroExamePage } from '../cadastro-exame/cadastro-exame';
import { CadastroConsultaPage } from '../cadastro-consulta/cadastro-consulta';
import { MedicosEClinicasPage } from '../medicos-e-clinicas/medicos-e-clinicas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, fbProvider: FirebaseProvider
  ) {
    // fbProvider.addDocumento({ cliente: 'teste' }).then(value => console.log(value.key));

  }

  cadastrarExame() {
    this.navCtrl.push(CadastroExamePage);
  }

  cadastroConsulta() {
    this.navCtrl.push(CadastroConsultaPage);
  }

  abrirMedicos(){
    this.navCtrl.push(MedicosEClinicasPage);
  }
}
