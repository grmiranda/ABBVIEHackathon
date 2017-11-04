import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { CadastroExamePage } from '../cadastro-exame/cadastro-exame';
import { CadastroConsultaPage } from '../cadastro-consulta/cadastro-consulta';
import { MedicosEClinicasPage } from '../medicos-e-clinicas/medicos-e-clinicas';
import { GerarCodigoPage } from '../gerar-codigo/gerar-codigo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, fbProvider: FirebaseProvider
  ) {
    localStorage.setItem('cpf', '000.000.000-00');
    // fbProvider.addDocumento({ cliente: 'teste' }).then(value => console.log(value.key));

  }

  cadastrarExame() {
    this.navCtrl.push(CadastroExamePage);
  }

  cadastroConsulta() {
    this.navCtrl.push(CadastroConsultaPage);
  }

  abrirMedicos() {
    this.navCtrl.push(MedicosEClinicasPage);
  }

  gerarCodigo() {
    this.navCtrl.push(GerarCodigoPage);
  }
}
