webpackJsonp([0],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoricoPage = (function () {
    function HistoricoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shownGroup = null;
        this.exames = [
            { titulo: 'Hemograma', data: '13/12/1993' },
            { titulo: 'HIV', data: '13/12/1993' }
        ];
        this.consultas = [
            { titulo: 'oioi', data: '13/12/1993' },
            { titulo: 'oioioi', data: '13/12/1993' }
        ];
    }
    HistoricoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoricoPage');
    };
    HistoricoPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    HistoricoPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    return HistoricoPage;
}());
HistoricoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-historico',template:/*ion-inline-start:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\historico\historico.html"*/'<!--\n\n  Generated template for the HistoricoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Histórico de Exames</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light" class="data">12/08/2017</ion-item-divider>\n\n    <ion-item>Hemograma</ion-item>\n\n    <ion-item-divider color="light" class="data">25/08/2017</ion-item-divider>\n\n    <ion-item>Virologia</ion-item>\n\n  </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\historico\historico.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], HistoricoPage);

//# sourceMappingURL=historico.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgInformativaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MsgInformativaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MsgInformativaPage = (function () {
    function MsgInformativaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titulo = "";
        this.msg = "";
        this.titulo = this.navParams.get('titulo');
        this.msg = this.navParams.get('msg');
    }
    MsgInformativaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MsgInformativaPage');
    };
    return MsgInformativaPage;
}());
MsgInformativaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-msg-informativa',template:/*ion-inline-start:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\msg-informativa\msg-informativa.html"*/'<!--\n\n  Generated template for the MsgInformativaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n  <ion-list color="primary">\n\n    <ion-list-header>{{titulo}}</ion-list-header>\n\n    <ion-item>{{msg}}</ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\msg-informativa\msg-informativa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], MsgInformativaPage);

//# sourceMappingURL=msg-informativa.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CameraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CameraProvider = (function () {
    function CameraProvider(camera) {
        this.camera = camera;
        console.log('Hello CameraProvider Provider');
    }
    CameraProvider.prototype.capturar = function (callback) {
        var options = {
            quality: 75,
            targetWidth: 500,
            allowEdit: true,
            targetHeight: 500,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            callback('data:image/jpeg;base64,' + imageData);
        }, function (err) {
            // Handle error
        });
    };
    return CameraProvider;
}());
CameraProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], CameraProvider);

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroExamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__msg_informativa_msg_informativa__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_documento__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_firebase__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CadastroExamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroExamePage = (function () {
    function CadastroExamePage(navCtrl, navParams, popoverCtrl, camera, fbProvider, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.camera = camera;
        this.fbProvider = fbProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.documento = new __WEBPACK_IMPORTED_MODULE_4__model_documento__["a" /* Documento */]();
    }
    CadastroExamePage.prototype.ionViewDidLoad = function () {
    };
    CadastroExamePage.prototype.capturar = function () {
        var _this = this;
        this.camera.capturar(function (imagem) { return _this.documento.exame = imagem; });
    };
    CadastroExamePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__msg_informativa_msg_informativa__["a" /* MsgInformativaPage */], { msg: 'código que tem presente na receita', titulo: 'o que é CRM?' });
        popover.present({
            ev: myEvent
        });
    };
    CadastroExamePage.prototype.presentPopoverEspe = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__msg_informativa_msg_informativa__["a" /* MsgInformativaPage */], { msg: 'Ex.: cardiologista', titulo: 'o que é Especialidade?' });
        popover.present({
            ev: myEvent
        });
    };
    CadastroExamePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    CadastroExamePage.prototype.enviar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.fbProvider.addDocumento(this.documento).then(function (_) {
            loading.dismiss();
            _this.documento = new __WEBPACK_IMPORTED_MODULE_4__model_documento__["a" /* Documento */]();
            _this.presentToast('Enviado com sucesso');
        }).catch(function () {
            _this.presentToast('Será enviado quando reconectar com internet');
            loading.dismiss();
        });
    };
    return CadastroExamePage;
}());
CadastroExamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cadastro-exame',template:/*ion-inline-start:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\cadastro-exame\cadastro-exame.html"*/'<!--\n\n  Generated template for the CadastroExamePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Cadastrar Exame</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>CRM médico</ion-label>\n\n        <ion-input [(ngModel)]="documento.medico"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col col-1>\n\n      <ion-icon style="margin-top: 40px" ios="ios-help" md="md-help" (click)="presentPopover($event)"></ion-icon>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Especialidade</ion-label>\n\n        <ion-input [(ngModel)]="documento.especialista"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col col-1>\n\n      <ion-icon style="margin-top: 40px" ios="ios-help" md="md-help" (click)="presentPopoverEspe($event)"></ion-icon>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-item>\n\n    <ion-label>Data de exame\n\n    </ion-label>\n\n    <ion-datetime displayFormat="DD/MM/YYYY  HH:mm" [(ngModel)]="documento.data"></ion-datetime>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-row>\n\n      <ion-col col-9>\n\n        <h2>Exame</h2>\n\n      </ion-col>\n\n      <ion-col>\n\n        <a (click)="capturar()">Capturar</a>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-img width="500" height="300" src={{documento.exame}}></ion-img>\n\n  </ion-item>\n\n\n\n  <button ion-button full style="margin-top: 50px" (click)="enviar()">Enviar</button>\n\n</ion-content>'/*ion-inline-end:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\cadastro-exame\cadastro-exame.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__["a" /* CameraProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_firebase_firebase__["a" /* FirebaseProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], CadastroExamePage);

//# sourceMappingURL=cadastro-exame.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Documento; });
var Documento = (function () {
    function Documento() {
        this.medico = "";
        this.paciente = localStorage.getItem('cpf');
        this.data = "";
        this.receita = "";
        this.exame = "";
        this.especialista = "";
        this.medicamentos = "";
    }
    return Documento;
}());

//# sourceMappingURL=documento.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroConsultaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__msg_informativa_msg_informativa__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_documento__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_firebase__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CadastroConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroConsultaPage = (function () {
    function CadastroConsultaPage(navCtrl, navParams, popoverCtrl, camera, fbProvider, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.camera = camera;
        this.fbProvider = fbProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.documento = new __WEBPACK_IMPORTED_MODULE_4__model_documento__["a" /* Documento */]();
    }
    CadastroConsultaPage.prototype.ionViewDidLoad = function () {
    };
    CadastroConsultaPage.prototype.presentPopoverEspe = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__msg_informativa_msg_informativa__["a" /* MsgInformativaPage */], { msg: 'Ex.: cardiologista', titulo: 'o que é Especialidade?' });
        popover.present({
            ev: myEvent
        });
    };
    CadastroConsultaPage.prototype.capturarReceita = function () {
        var _this = this;
        this.camera.capturar(function (imagem) { return _this.documento.receita = imagem; });
    };
    CadastroConsultaPage.prototype.capturarMedicamento = function () {
        var _this = this;
        this.camera.capturar(function (imagem) { return _this.documento.medicamentos = imagem; });
    };
    CadastroConsultaPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__msg_informativa_msg_informativa__["a" /* MsgInformativaPage */], { msg: 'código que tem presente na receita', titulo: 'o que é CRM?' });
        popover.present({
            ev: myEvent
        });
    };
    CadastroConsultaPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    CadastroConsultaPage.prototype.enviar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.fbProvider.addDocumento(this.documento).then(function (_) {
            loading.dismiss();
            _this.documento = new __WEBPACK_IMPORTED_MODULE_4__model_documento__["a" /* Documento */]();
            _this.presentToast('Enviado com sucesso');
        }).catch(function () {
            _this.presentToast('Será enviado quando reconectar com internet');
            loading.dismiss();
        });
    };
    return CadastroConsultaPage;
}());
CadastroConsultaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cadastro-consulta',template:/*ion-inline-start:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\cadastro-consulta\cadastro-consulta.html"*/'<!--\n\n  Generated template for the CadastroConsultaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Cadastrar Consulta</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>CRM médico</ion-label>\n\n        <ion-input [(ngModel)]="documento.medico"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col col-1>\n\n      <ion-icon style="margin-top: 40px" ios="ios-help" md="md-help" (click)="presentPopover($event)"></ion-icon>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-item>\n\n        <ion-label color="primary" floating>Especialidade</ion-label>\n\n        <ion-input [(ngModel)]="documento.especialista"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col col-1>\n\n      <ion-icon style="margin-top: 40px" ios="ios-help" md="md-help" (click)="presentPopoverEspe($event)"></ion-icon>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-item>\n\n    <ion-label>Data de consulta\n\n    </ion-label>\n\n    <ion-datetime displayFormat="DD/MM/YYYY  HH:mm" [(ngModel)]="documento.data"></ion-datetime>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-row>\n\n      <ion-col col-9>\n\n        <h2>Receita</h2>\n\n      </ion-col>\n\n      <ion-col>\n\n        <a (click)="capturarReceita()">Capturar</a>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-img width="500" height="300" src={{documento.receita}}></ion-img>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-row>\n\n      <ion-col col-9>\n\n        <h2>Medicamentos utilizados</h2>\n\n      </ion-col>\n\n      <ion-col>\n\n        <a (click)="capturarMedicamento()">Capturar</a>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-img width="500" height="300" src={{documento.medicamentos}}></ion-img>\n\n  </ion-item>\n\n  <button ion-button full style="margin-top: 50px" (click)="enviar()">Enviar</button>\n\n</ion-content>'/*ion-inline-end:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\cadastro-consulta\cadastro-consulta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__["a" /* CameraProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_firebase_firebase__["a" /* FirebaseProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], CadastroConsultaPage);

//# sourceMappingURL=cadastro-consulta.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicosEClinicasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cidade_cidade__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MedicosEClinicasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicosEClinicasPage = (function () {
    function MedicosEClinicasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.envolvidos = [
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
        ];
    }
    MedicosEClinicasPage.prototype.ionViewDidLoad = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cidade_cidade__["a" /* CidadePage */]);
    };
    MedicosEClinicasPage.prototype.selectCategoria = function (envolvido) {
        envolvido.icon = envolvido.icon == 'ios-arrow-forward' ? "ios-arrow-down" : 'ios-arrow-forward';
    };
    return MedicosEClinicasPage;
}());
MedicosEClinicasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-medicos-e-clinicas',template:/*ion-inline-start:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\medicos-e-clinicas\medicos-e-clinicas.html"*/'<!--\n\n  Generated template for the MedicosEClinicasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Lista de Médicos/Clinicas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar></ion-searchbar>\n\n  <ion-list>\n\n    <ion-item *ngFor="let envolvido of envolvidos">\n\n      <ion-row  (click)="selectCategoria(envolvido)">\n\n        <ion-col>\n\n          <div>{{envolvido.area}}</div>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <ion-icon name={{envolvido.icon}}></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n      <div *ngIf="envolvido.icon == \'ios-arrow-down\'">\n\n        <ion-item *ngFor="let medico of envolvido.pessoas">{{medico.nome}} <p *ngIf="medico.tel">{{medico.tel}}</p> </ion-item>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\medicos-e-clinicas\medicos-e-clinicas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], MedicosEClinicasPage);

//# sourceMappingURL=medicos-e-clinicas.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CidadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CidadePage = (function () {
    function CidadePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.estados = ["Acre",
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
        this.cidades = [
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
    }
    CidadePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CidadePage');
    };
    CidadePage.prototype.close = function () {
        this.navCtrl.pop();
    };
    return CidadePage;
}());
CidadePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cidade',template:/*ion-inline-start:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\cidade\cidade.html"*/'<!--\n\n  Generated template for the CidadePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Qual Região?</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>Estado</ion-label>\n\n    <ion-select>\n\n      <ion-option *ngFor="let estado of estados" value={{estado}}>{{estado}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Cidade</ion-label>\n\n    <ion-select>\n\n      <ion-option *ngFor="let cidade of cidades" value={{cidade}}>{{cidade}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <button ion-button full style="margin-top: 50px" (click)="close()">Filtrar</button>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\cidade\cidade.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], CidadePage);

//# sourceMappingURL=cidade.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GerarCodigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GerarCodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GerarCodigoPage = (function () {
    function GerarCodigoPage(navCtrl, navParams, fbProvidade) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbProvidade = fbProvidade;
        this.tempo = "";
        this.codigo = "";
        this.primera = true;
    }
    GerarCodigoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GerarCodigoPage');
    };
    GerarCodigoPage.prototype.gerarHash = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        if (!this.primera) {
            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        else {
            text = "H1K7P";
            this.primera = false;
        }
        this.codigo = text;
        this.fbProvidade.addCodigo({ tempo: this.tempo, codigo: this.codigo, cpf: localStorage.getItem('cpf') });
    };
    return GerarCodigoPage;
}());
GerarCodigoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-gerar-codigo',template:/*ion-inline-start:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\gerar-codigo\gerar-codigo.html"*/'<!--\n\n  Generated template for the GerarCodigoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Gerar Codigo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>Tempo Disponivel</ion-label>\n\n    <ion-select [(ngModel)]="tempo">\n\n      <ion-option value="30">30 min</ion-option>\n\n      <ion-option value="1">1 hr</ion-option>\n\n      <ion-option value="2">2 hrs</ion-option>\n\n      <ion-option value="4">4 hrs</ion-option>\n\n      <ion-option value="8">8 hrs</ion-option>\n\n      <ion-option value="12">12 hrs</ion-option>\n\n      <ion-option value="24">24 hrs</ion-option>\n\n      <ion-option value="48">48 hrs</ion-option>\n\n      <ion-option value="Ilimitado"> Ilimitado</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <button ion-button full style="margin-top: 10px; margin-bottom: 20px" (click)="gerarHash()">Gerar Código</button>\n\n\n\n  <b>Seu Código é:</b>\n\n  <h1 style="text-align: center; background-color: yellow">{{codigo}}</h1>\n\n</ion-content>'/*ion-inline-end:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\gerar-codigo\gerar-codigo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], GerarCodigoPage);

//# sourceMappingURL=gerar-codigo.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoConsultaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizar_consulta_visualizar_consulta__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HistoricoConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoricoConsultaPage = (function () {
    function HistoricoConsultaPage(navCtrl, navParams, fbProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbProvider = fbProvider;
        this.consultas = [];
        this.fbProvider.getdocument().subscribe(function (res) { return _this.consultas = res; });
    }
    HistoricoConsultaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoricoConsultaPage');
    };
    HistoricoConsultaPage.prototype.visualizar = function (consulta) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__visualizar_consulta_visualizar_consulta__["a" /* VisualizarConsultaPage */], { consulta: consulta });
    };
    return HistoricoConsultaPage;
}());
HistoricoConsultaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-historico-consulta',template:/*ion-inline-start:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\historico-consulta\historico-consulta.html"*/'<!--\n\n  Generated template for the HistoricoConsultaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Historico de Consultas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light" class="data">12/08/2017</ion-item-divider>\n\n    <ion-item *ngFor="let consulta of consultas" (click)="visualizar(consulta)">{{consulta.especialista}}</ion-item>\n\n  </ion-item-group>\n\n</ion-content>'/*ion-inline-end:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\historico-consulta\historico-consulta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], HistoricoConsultaPage);

//# sourceMappingURL=historico-consulta.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizarConsultaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VisualizarConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisualizarConsultaPage = (function () {
    function VisualizarConsultaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.consulta = {};
        this.consulta = this.navParams.get('consulta');
    }
    VisualizarConsultaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VisualizarConsultaPage');
    };
    VisualizarConsultaPage.prototype.abrirChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
    };
    return VisualizarConsultaPage;
}());
VisualizarConsultaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-visualizar-consulta',template:/*ion-inline-start:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\visualizar-consulta\visualizar-consulta.html"*/'<!--\n  Generated template for the VisualizarConsultaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Visualizar Consulta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <p>Data</p>\n    <h1>04/11/2017</h1>\n  </ion-item>\n  <ion-item>\n    <p>Especialista</p>\n    <h1>{{consulta.especialista}}</h1>\n  </ion-item>\n  <ion-item>\n    <p>CRM Médico</p>\n    <h1>{{consulta.medico}}</h1>\n  </ion-item>\n  <ion-item *ngIf="consulta.exame">\n    <p>Exame</p>\n    <ion-img width="500" height="300" src={{consulta.exame}}></ion-img>\n  </ion-item>\n  <ion-item *ngIf="consulta.medicamentos">\n    <p>Medicamento</p>\n    <ion-img width="500" height="300" src={{consulta.medicamentos}}></ion-img>\n  </ion-item>\n  <ion-item *ngIf="consulta.receita">\n    <p>Receita</p>\n    <ion-img width="500" height="300" src={{consulta.receita}}></ion-img>\n  </ion-item>\n  <button ion-button color="secondary" full style="margin-top: 50px" (click)="abrirChat()">Conversar com médico</button>\n\n\n</ion-content>'/*ion-inline-end:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\visualizar-consulta\visualizar-consulta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], VisualizarConsultaPage);

//# sourceMappingURL=visualizar-consulta.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, fbProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbProvider = fbProvider;
        this.msgList = [];
        this.showEmojiPicker = false;
        this.editorMsg = "";
        this.fbProvider.getMensagem().subscribe(function (msgs) {
            _this.msgList = msgs;
        });
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.sendMsg = function () {
        this.fbProvider.enviarMsg({ userName: 'Paciente', message: this.editorMsg, time: new Date().toLocaleTimeString().substr(0, 5) });
        this.editorMsg = "";
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\chat\chat.html"*/'<!--\n\n  Generated template for the ChatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--\n\n  Generated template for the Chat page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>João</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div class="message-wrap">\n\n\n\n    <div *ngFor="let msg of msgList" class="message" [class.left]="msg.userName != \'Paciente\'" [class.right]="msg.userName == \'Paciente\'">\n\n      <img class="user-img" src="https://marketingdeconteudo.com/wp-content/uploads/2017/01/formatos-de-imagem-2.jpg" alt="" src="">\n\n      <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n\n      <div class="msg-detail">\n\n        <div class="msg-info">\n\n          <p>\n\n            {{msg.userName}}&nbsp;&nbsp;&nbsp;{{msg.time}}</p>\n\n        </div>\n\n        <div class="msg-content">\n\n          <span class="triangle"></span>\n\n          <p class="line-breaker ">{{msg.message}}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n  <ion-grid class="input-wrap">\n\n    <ion-row>\n\n      <ion-col col-10>\n\n        <ion-textarea #chat_input placeholder="Text Input" [(ngModel)]="editorMsg" (keyup.enter)="sendMsg()">\n\n        </ion-textarea>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button ion-button clear icon-only item-right (click)="sendMsg()">\n\n          <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>'/*ion-inline-end:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(299);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_firebase_firebase__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cadastro_exame_cadastro_exame__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_msg_informativa_msg_informativa__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_camera_camera__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cadastro_consulta_cadastro_consulta__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_medicos_e_clinicas_medicos_e_clinicas__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_cidade_cidade__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_gerar_codigo_gerar_codigo__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_chat_chat__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_historico_historico__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_historico_consulta_historico_consulta__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_visualizar_consulta_visualizar_consulta__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var firebaseConfig = {
    apiKey: "AIzaSyAJpQtdB9cDhufYCwSQXvsGGRs0HKFEdzs",
    authDomain: "hackathonabbvie.firebaseapp.com",
    databaseURL: "https://hackathonabbvie.firebaseio.com",
    projectId: "hackathonabbvie",
    storageBucket: "hackathonabbvie.appspot.com",
    messagingSenderId: "808637613511"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_cadastro_exame_cadastro_exame__["a" /* CadastroExamePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_msg_informativa_msg_informativa__["a" /* MsgInformativaPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_cadastro_consulta_cadastro_consulta__["a" /* CadastroConsultaPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_medicos_e_clinicas_medicos_e_clinicas__["a" /* MedicosEClinicasPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_cidade_cidade__["a" /* CidadePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_gerar_codigo_gerar_codigo__["a" /* GerarCodigoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_historico_historico__["a" /* HistoricoPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_historico_consulta_historico_consulta__["a" /* HistoricoConsultaPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_visualizar_consulta_visualizar_consulta__["a" /* VisualizarConsultaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_cadastro_exame_cadastro_exame__["a" /* CadastroExamePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_msg_informativa_msg_informativa__["a" /* MsgInformativaPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_cadastro_consulta_cadastro_consulta__["a" /* CadastroConsultaPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_medicos_e_clinicas_medicos_e_clinicas__["a" /* MedicosEClinicasPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_cidade_cidade__["a" /* CidadePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_gerar_codigo_gerar_codigo__["a" /* GerarCodigoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_historico_historico__["a" /* HistoricoPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_historico_consulta_historico_consulta__["a" /* HistoricoConsultaPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_visualizar_consulta_visualizar_consulta__["a" /* VisualizarConsultaPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_firebase_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_camera_camera__["a" /* CameraProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_historico_historico__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_historico_historico__["a" /* HistoricoPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\workSpace\testes\hackathonAbbvie\app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\workSpace\testes\hackathonAbbvie\app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__historico_historico__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_exame_cadastro_exame__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cadastro_consulta_cadastro_consulta__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__medicos_e_clinicas_medicos_e_clinicas__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gerar_codigo_gerar_codigo__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__historico_consulta_historico_consulta__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, fbProvider) {
        this.navCtrl = navCtrl;
        localStorage.setItem('cpf', '000.000.000-00');
        // fbProvider.addDocumento({ cliente: 'teste' }).then(value => console.log(value.key));
    }
    HomePage.prototype.cadastrarExame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_exame_cadastro_exame__["a" /* CadastroExamePage */]);
    };
    HomePage.prototype.cadastroConsulta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cadastro_consulta_cadastro_consulta__["a" /* CadastroConsultaPage */]);
    };
    HomePage.prototype.abrirMedicos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__medicos_e_clinicas_medicos_e_clinicas__["a" /* MedicosEClinicasPage */]);
    };
    HomePage.prototype.gerarCodigo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__gerar_codigo_gerar_codigo__["a" /* GerarCodigoPage */]);
    };
    HomePage.prototype.historicoExame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__historico_historico__["a" /* HistoricoPage */]);
    };
    HomePage.prototype.historicoConsulta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__historico_consulta_historico_consulta__["a" /* HistoricoConsultaPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary" class="center">\n\n    <img src="./images/logo.png" class="logo">\n\n    <p>das</p>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-item  class="cardButton blue" (click)="cadastrarExame()">\n\n            <p class="cardTitle">Cadastrar</p>\n\n            <p class="cardTitle">Exame</p>\n\n            <img class="cardImage" src="./images/exame.png">\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-item class="cardButton green" (click)="cadastroConsulta()">\n\n          <p class="cardTitle">Cadastrar</p>\n\n          <p class="cardTitle">Consulta</p>\n\n          <img class="cardImage" src="./images/consulta.png">\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-item class="cardButton orange" (click)="abrirMedicos()">\n\n          <p class="cardTitle">Lista de Medicos</p>\n\n          <p class="cardTitle">Clinicas</p>\n\n          <img class="cardImage" src="./images/lupa.png">\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-item class="cardButton purple" (click)="gerarCodigo()">\n\n          <p class="cardTitle">Gerar</p>\n\n          <p class="cardTitle">Codigo</p>\n\n          <img class="cardImage" src="./images/engrenagem.png">\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <p class="textInfo" >Acesse seu histórico</p>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-item class="cardButton yellow" (click)="historicoExame()">\n\n          <p class="cardTitle">Histórico de</p>\n\n          <p class="cardTitle">Exames</p>\n\n          <img class="cardImage" src="./images/hexame.png">\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-item class="cardButton gray" (click)="historicoConsulta()">\n\n          <p class="cardTitle">Histórico de</p>\n\n          <p class="cardTitle">Consultas</p>\n\n          <img class="cardImage" src="./images/hconsulta.png">\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\workSpace\testes\hackathonAbbvie\app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseProvider = (function () {
    function FirebaseProvider(afdb) {
        this.afdb = afdb;
    }
    FirebaseProvider.prototype.getdocumentPaciente = function (cpf) {
        return this.afdb.list("/documentos/", {
            query: {
                orderByChild: 'paciente',
                equalTo: cpf
            }
        });
    };
    FirebaseProvider.prototype.enviarMsg = function (msg) {
        return this.afdb.list('/mensagem/').push(msg);
    };
    FirebaseProvider.prototype.getMensagem = function () {
        return this.afdb.list('/mensagem/');
    };
    FirebaseProvider.prototype.getdocument = function () {
        return this.afdb.list("/documentos/");
    };
    FirebaseProvider.prototype.addDocumento = function (documento) {
        return this.afdb.list('/documentos/').push(documento);
    };
    FirebaseProvider.prototype.addCodigo = function (codigo) {
        return this.afdb.list('/codigo/').push(codigo);
    };
    // __________________________________________modelo a usar ________________________________________________
    FirebaseProvider.prototype.getOS = function () {
        return this.afdb.list('/ordemServicos/');
    };
    FirebaseProvider.prototype.getMarcaModelo = function () {
        return this.afdb.list('/marcaModelo/', {
            query: {
                orderByChild: 'marca'
            }
        });
    };
    FirebaseProvider.prototype.removeMarca = function (marca) {
        return this.afdb.list('/marcaModelo/').remove(marca);
    };
    FirebaseProvider.prototype.addMarca = function (marca) {
        return this.afdb.list('/marcaModelo/').push(marca);
    };
    FirebaseProvider.prototype.addModelo = function (key, valor) {
        return this.afdb.list('/marcaModelo/').update(key, valor);
    };
    FirebaseProvider.prototype.updateMarca = function (key, valor) {
        return this.afdb.list('/marcaModelo/').update(key, valor);
    };
    FirebaseProvider.prototype.getEqualsOS = function (valor) {
        return this.afdb.list('/ordemServicos/', {
            query: {
                orderByChild: 'status',
                equalTo: valor
            }
        });
    };
    FirebaseProvider.prototype.getEntregue = function () {
        return this.afdb.list('/ordemServicos/', {
            query: {
                orderByChild: 'status',
                equalTo: 'entregue'
            }
        });
    };
    FirebaseProvider.prototype.checkIn = function (key, id, valor, tecnico) {
        return this.afdb.list('/ordemServicos/').update(key + "/servicos/" + id, { feito: valor, tecnico: tecnico });
    };
    FirebaseProvider.prototype.checkInR = function (key, posicao, idServico, valor, tecnico) {
        return this.afdb.list('/ordemServicos/').update(key + "/retrabalho/" + posicao + "/servicos/" + idServico, { feito: valor, tecnico: tecnico });
    };
    FirebaseProvider.prototype.updateOS = function (key, valor) {
        return this.afdb.list('/ordemServicos/').update(key, valor);
    };
    FirebaseProvider.prototype.updateStatus = function (key, valor, retrabalho) {
        var _this = this;
        if (valor == "entregue") {
            var dataTerminado = new Date();
            var entrega_1 = dataTerminado.getFullYear() + "-" + ("0" + (dataTerminado.getMonth() + 1)).slice(-2) + "-" + ("0" + dataTerminado.getDate()).slice(-2) + " " + dataTerminado.getHours() + ":" + ("0" + dataTerminado.getMinutes()).slice(-2);
            var entregaShow_1 = new Date(dataTerminado).toLocaleDateString() + " " + new Date(dataTerminado).toLocaleTimeString().substring(0, 5);
            if (retrabalho == undefined) {
                return this.afdb.list('/ordemServicos/').update(key, { status: valor, entrega: entrega_1, entregaShow: entregaShow_1 });
            }
            else {
                return this.afdb.list('/ordemServicos/').update(key, { status: valor }).then(function (_) {
                    _this.afdb.list('/ordemServicos/').update(key + "/retrabalho/" + retrabalho.posicao, { dataEntrega: entrega_1, dataEntregaShow: entregaShow_1 });
                });
            }
        }
        else {
            return this.afdb.list('/ordemServicos/').update(key, { status: valor });
        }
    };
    FirebaseProvider.prototype.hrConluida = function (key, tempoServico, tempoEntrega, atrasado) {
        return this.afdb.list('/ordemServicos/').update(key, { tempoServico: tempoServico, tempoEntrega: tempoEntrega, atrasado: atrasado });
    };
    FirebaseProvider.prototype.hrConluidaR = function (key, posicao, tempoServico, tempoEntrega, atrasado) {
        return this.afdb.list('/ordemServicos/').update(key + "/retrabalho/" + posicao, { tempoServico: tempoServico, tempoEntrega: tempoEntrega, atrasado: atrasado });
    };
    FirebaseProvider.prototype.updateRetrabalho = function (key, valor) {
        return this.afdb.list('/ordemServicos/').update(key, { retrabalho: valor, tipoDeServico: 'R' });
    };
    FirebaseProvider.prototype.updateOBS = function (key, valor) {
        return this.afdb.list('/ordemServicos/').update(key, { obsTecnico: valor });
    };
    FirebaseProvider.prototype.setOrcamento = function (key, valor, orcamento) {
        return this.afdb.list('/ordemServicos/').update(key, { orcamento: orcamento, valorOrcamento: valor });
    };
    FirebaseProvider.prototype.terminarOS = function (key, data, dataShow) {
        return this.afdb.list('/ordemServicos/').update(key, { status: 'entregue', entrega: data, entregaShow: dataShow });
    };
    FirebaseProvider.prototype.getOSOrder = function () {
        return this.afdb.list('/ordemServicos/', {
            query: {
                orderByChild: 'entrega'
            }
        });
    };
    FirebaseProvider.prototype.getiD = function () {
        return this.afdb.list('/ordemServicos/', {
            query: {
                orderByChild: 'id'
            }
        }).map(function (posts) {
            return posts.reverse();
        });
    };
    FirebaseProvider.prototype.getOrdenarOS = function () {
        return this.afdb.list('/ordemServicos/', {
            query: {
                orderByChild: 'status'
            }
        });
    };
    return FirebaseProvider;
}());
FirebaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], FirebaseProvider);

//# sourceMappingURL=firebase.js.map

/***/ })

},[282]);
//# sourceMappingURL=main.js.map