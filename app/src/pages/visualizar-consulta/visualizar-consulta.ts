import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
/**
 * Generated class for the VisualizarConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-visualizar-consulta',
  templateUrl: 'visualizar-consulta.html',
})
export class VisualizarConsultaPage {

  private consulta = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.consulta = this.navParams.get('consulta');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizarConsultaPage');
  }

  abrirChat() {
    this.navCtrl.push(ChatPage);
  }

}
