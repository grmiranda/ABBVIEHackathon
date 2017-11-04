import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cidade',
  templateUrl: 'cidade.html',
})
export class CidadePage {

  private estados = ["Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba"];

  private cidades = [
    "Alagoinhas",
    "Alcobaça",
    "Almadina",
    "Amargosa",
    "Amélia Rodrigues",
    "América Dourada",
    "Anagé",
    "Andaraí",
    "Andorinha",
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CidadePage');
  }

  close() {
    this.navCtrl.pop();
  }

}
