import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afdb: AngularFireDatabase) {

  }

  getdocumentPaciente(cpf) {
    return this.afdb.list(`/documentos/`, {
      query: {
        orderByChild: 'paciente',
        equalTo: cpf
      }
    });
  }

  enviarMsg(msg){
    return this.afdb.list('/mensagem/').push(msg);    
  }

  getMensagem(){
    return this.afdb.list('/mensagem/');    
  }

  getdocument() {
    return this.afdb.list(`/documentos/`);
  }

  addDocumento(documento) {
    return this.afdb.list('/documentos/').push(documento);
  }

  addCodigo(codigo) {
    return this.afdb.list('/codigo/').push(codigo);
  }



  // __________________________________________modelo a usar ________________________________________________

  getOS() {
    return this.afdb.list('/ordemServicos/');
  }


  getMarcaModelo() {
    return this.afdb.list('/marcaModelo/', {
      query: {
        orderByChild: 'marca'
      }
    });
  }

  removeMarca(marca) {
    return this.afdb.list('/marcaModelo/').remove(marca);
  }

  addMarca(marca) {
    return this.afdb.list('/marcaModelo/').push(marca);
  }

  addModelo(key, valor) {
    return this.afdb.list('/marcaModelo/').update(key, valor);
  }

  updateMarca(key, valor) {
    return this.afdb.list('/marcaModelo/').update(key, valor);
  }

  getEqualsOS(valor: string) {
    return this.afdb.list('/ordemServicos/', {
      query: {
        orderByChild: 'status',
        equalTo: valor
      }
    });
  }

  getEntregue() {
    return this.afdb.list('/ordemServicos/', {
      query: {
        orderByChild: 'status',
        equalTo: 'entregue'
      }
    });
  }

  checkIn(key, id, valor, tecnico) {
    return this.afdb.list('/ordemServicos/').update(key + "/servicos/" + id, { feito: valor, tecnico: tecnico })
  }

  checkInR(key, posicao, idServico, valor, tecnico) {
    return this.afdb.list('/ordemServicos/').update(`${key}/retrabalho/${posicao}/servicos/${idServico}`, { feito: valor, tecnico: tecnico })
  }


  updateOS(key, valor) {
    return this.afdb.list('/ordemServicos/').update(key, valor);
  }

  updateStatus(key, valor, retrabalho) {
    if (valor == "entregue") {
      let dataTerminado = new Date();
      let entrega = `${dataTerminado.getFullYear()}-${("0" + (dataTerminado.getMonth() + 1)).slice(-2)}-${("0" + dataTerminado.getDate()).slice(-2)} ${dataTerminado.getHours()}:${("0" + dataTerminado.getMinutes()).slice(-2)}`;
      let entregaShow = `${new Date(dataTerminado).toLocaleDateString()} ${new Date(dataTerminado).toLocaleTimeString().substring(0, 5)}`;
      if (retrabalho == undefined) {
        return this.afdb.list('/ordemServicos/').update(key, { status: valor, entrega: entrega, entregaShow: entregaShow });
      } else {
        return this.afdb.list('/ordemServicos/').update(key, { status: valor }).then(_ => {
          this.afdb.list('/ordemServicos/').update(`${key}/retrabalho/${retrabalho.posicao}`, { dataEntrega: entrega, dataEntregaShow: entregaShow });
        });
      }
    } else {
      return this.afdb.list('/ordemServicos/').update(key, { status: valor });
    }
  }

  hrConluida(key, tempoServico, tempoEntrega, atrasado: boolean) {
    return this.afdb.list('/ordemServicos/').update(key, { tempoServico: tempoServico, tempoEntrega: tempoEntrega, atrasado: atrasado });
  }

  hrConluidaR(key, posicao, tempoServico, tempoEntrega, atrasado: boolean) {
    return this.afdb.list('/ordemServicos/').update(`${key}/retrabalho/${posicao}`, { tempoServico: tempoServico, tempoEntrega: tempoEntrega, atrasado: atrasado });
  }

  updateRetrabalho(key, valor) {
    return this.afdb.list('/ordemServicos/').update(key, { retrabalho: valor, tipoDeServico: 'R' });
  }

  updateOBS(key, valor) {
    return this.afdb.list('/ordemServicos/').update(key, { obsTecnico: valor });
  }

  setOrcamento(key, valor, orcamento) {
    return this.afdb.list('/ordemServicos/').update(key, { orcamento: orcamento, valorOrcamento: valor });
  }

  terminarOS(key, data, dataShow) {
    return this.afdb.list('/ordemServicos/').update(key, { status: 'entregue', entrega: data, entregaShow: dataShow });
  }

  getOSOrder() {
    return this.afdb.list('/ordemServicos/', {
      query: {
        orderByChild: 'entrega'
      }
    });
  }



  getiD() {
    return this.afdb.list('/ordemServicos/', {
      query: {
        orderByChild: 'id'
      }
    }).map(posts => {
      return posts.reverse();
    });
  }

  getOrdenarOS() {
    return this.afdb.list('/ordemServicos/', {
      query: {
        orderByChild: 'status'
      }
    });
  }

}
