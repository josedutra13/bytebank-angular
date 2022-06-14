import { Transferencia } from './../models/transferencia';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  public transferencias: any[];

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.transferenciaService.todasAsTransferencias().subscribe((transferencia: Transferencia[])=>{
      console.table(transferencia);
      this.transferencias = transferencia;
    })
  }

}
