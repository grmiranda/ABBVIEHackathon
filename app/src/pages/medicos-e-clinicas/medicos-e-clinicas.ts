import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CidadePage } from '../cidade/cidade';
/**
 * Generated class for the MedicosEClinicasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-medicos-e-clinicas',
  templateUrl: 'medicos-e-clinicas.html',
})
export class MedicosEClinicasPage {

  private envolvidos = [
    {
      area: 'Cardiologia',
      icon: 'ios-arrow-forward',
      pessoas: [
        { nome: 'Dr. joão Silva', tel: '759999999' },
        { nome: 'Clinica seu coração', tel: '75888888' }
      ]
    },
    {
      area: 'Dermatologia',
      icon: 'ios-arrow-forward',
      pessoas: [
        { nome: 'Dr. Marcos', tel: '7599956656' },
        { nome: 'Dr. Luciana', tel: '' }
      ]
    },
    {
      area: 'Angeologia',
      icon: 'ios-arrow-forward',
      pessoas: [
        { nome: 'Dr. Marcos', tel: '7594944545' },
        { nome: 'Dr. Luciana', tel: '7595656565' }
      ]
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.navCtrl.push(CidadePage);
  }

  selectCategoria(envolvido) {
    envolvido.icon = envolvido.icon == 'ios-arrow-forward' ? "ios-arrow-down" : 'ios-arrow-forward';
  }
}
