import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  private msgList = [];
  private showEmojiPicker = false;
  private editorMsg = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fbProvider: FirebaseProvider
  ) {
    this.fbProvider.getMensagem().subscribe(msgs => {
      this.msgList = msgs;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  sendMsg() {
    this.fbProvider.enviarMsg({ userName: 'Paciente', message: this.editorMsg, time: new Date().toLocaleTimeString().substr(0, 5) });
    this.editorMsg = "";
  }

}
