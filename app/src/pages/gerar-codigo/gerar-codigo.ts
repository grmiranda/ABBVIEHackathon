import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the GerarCodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-gerar-codigo',
  templateUrl: 'gerar-codigo.html',
})
export class GerarCodigoPage {

  private tempo = "";
  private codigo = "";
  private primera = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fbProvidade: FirebaseProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GerarCodigoPage');
  }

  gerarHash() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    if (!this.primera) {
      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    } else {
      text = "H1K7P";
      this.primera = false;
    }
    this.codigo = text;
    this.fbProvidade.addCodigo({ tempo: this.tempo, codigo: this.codigo, cpf: localStorage.getItem('cpf') });
  }


}
