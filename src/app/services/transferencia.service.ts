import { Transferencia } from './../models/transferencia';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaDeTransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient ) {
    this.listaDeTransferencias = [];
  }

  get trasferencias(){
    return this.listaDeTransferencias;
  }

  todasAsTransferencias() : Observable<Transferencia[]>{
     return this.httpClient.get<Transferencia[]>(this.url);
  }

  public adiciona(transferencia): Observable<Transferencia>{
     this.hidrata(transferencia);
     return this.httpClient.post<Transferencia>(this.url,transferencia);
  }

  private hidrata(transferencia){
     transferencia.data = new Date();
  }

}
