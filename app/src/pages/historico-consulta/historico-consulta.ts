import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { VisualizarConsultaPage } from '../visualizar-consulta/visualizar-consulta';
/**
 * Generated class for the HistoricoConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-historico-consulta',
  templateUrl: 'historico-consulta.html',
})
export class HistoricoConsultaPage {

  private consultas = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fbProvider: FirebaseProvider
  ) {
    this.fbProvider.getdocument().subscribe(res => this.consultas = res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoConsultaPage');
  }

  visualizar(consulta) {
    this.navCtrl.push(VisualizarConsultaPage, { consulta });
  }

}
