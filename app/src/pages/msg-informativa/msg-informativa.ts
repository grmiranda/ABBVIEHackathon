import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MsgInformativaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-msg-informativa',
  templateUrl: 'msg-informativa.html',
})
export class MsgInformativaPage {

  private titulo: string = "";
  private msg: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titulo = this.navParams.get('titulo');
    this.msg = this.navParams.get('msg');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsgInformativaPage');
  }

}
