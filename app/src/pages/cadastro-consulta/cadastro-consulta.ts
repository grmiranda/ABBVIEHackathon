import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { MsgInformativaPage } from '../msg-informativa/msg-informativa';
import { CameraProvider } from '../../providers/camera/camera';
import { Documento } from '../../model/documento';
import { FirebaseProvider } from '../../providers/firebase/firebase';
/**
 * Generated class for the CadastroConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cadastro-consulta',
  templateUrl: 'cadastro-consulta.html',
})
export class CadastroConsultaPage {

  private documento: Documento = new Documento();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private popoverCtrl: PopoverController,
    private camera: CameraProvider,
    private fbProvider: FirebaseProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
  }

  presentPopoverEspe(myEvent) {
    let popover = this.popoverCtrl.create(MsgInformativaPage, { msg: 'Ex.: cardiologista', titulo: 'o que é Especialidade?' });
    popover.present({
      ev: myEvent
    });
  }

  capturarReceita() {
    this.camera.capturar(imagem => this.documento.receita = imagem);
  }

  capturarMedicamento() {
    this.camera.capturar(imagem => this.documento.medicamentos = imagem);
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MsgInformativaPage, { msg: 'código que tem presente na receita', titulo: 'o que é CRM?' });
    popover.present({
      ev: myEvent
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  enviar() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.fbProvider.addDocumento(this.documento).then(_ => {
      loading.dismiss();
      this.documento = new Documento();
      this.presentToast('Enviado com sucesso');
    }).catch(() => {
      this.presentToast('Será enviado quando reconectar com internet');
      loading.dismiss()
    });
  }

}
