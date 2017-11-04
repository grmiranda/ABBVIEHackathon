import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
        { nome: 'Dr. joão Silva' },
        { nome: 'Clinica seu coração' }
      ]
    },
    {
      area: 'Dermatologia',
      icon: 'ios-arrow-forward',
      pessoas: [
        { nome: 'Dr. Marcos' },
        { nome: 'Dr. Luciana' }
      ]
    },
    {
      area: 'Angeologia',
      icon: 'ios-arrow-forward',
      pessoas: [
        { nome: 'Dr. Marcos' },
        { nome: 'Dr. Luciana' }
      ]
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicosEClinicasPage');
  }


  selectCategoria(envolvido) {
    envolvido.icon = envolvido.icon == 'ios-arrow-forward' ? "ios-arrow-down" : 'ios-arrow-forward';
  }
}
