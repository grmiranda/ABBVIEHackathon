import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';
import { CadastroExamePage } from '../pages/cadastro-exame/cadastro-exame';
import { MsgInformativaPage } from '../pages/msg-informativa/msg-informativa';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CameraProvider } from '../providers/camera/camera';

const firebaseConfig = {
  apiKey: "AIzaSyAJpQtdB9cDhufYCwSQXvsGGRs0HKFEdzs",
  authDomain: "hackathonabbvie.firebaseapp.com",
  databaseURL: "https://hackathonabbvie.firebaseio.com",
  projectId: "hackathonabbvie",
  storageBucket: "hackathonabbvie.appspot.com",
  messagingSenderId: "808637613511"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroExamePage,
    MsgInformativaPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroExamePage,
    MsgInformativaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseProvider,
    CameraProvider
  ]
})
export class AppModule { }
