import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';


@Component(
    {
        selector: 'app-nova-transferencia',
        templateUrl:'./nova-transferencia-component.html',
        styleUrls: ['./nova-transferencia-component.scss']
    }
)
export class NovaTransferenciaComponent{

   valor: number;
   destino: number;

   constructor(private transferenciaService: TransferenciaService, private routes: Router){}

   public transferir(){
    //  console.log(`
    //    Valor: ${this.valor}
    //    Destino: ${this.destino}
    //  `);
    const valoresTransferidos = {valor: this.valor, destino: this.destino};
    this.transferenciaService.adiciona(valoresTransferidos).subscribe(transferencia =>{
      this.limpaCampo();
      this.routes.navigateByUrl('extrato');
    }, error =>{ console.error(error)});
   }

   public limpaCampo(){
     this.valor = 0;
     this.destino = 0;
   }
}
