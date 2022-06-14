import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia-component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
//a-routes para criar a variavel de rotas
export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'novaTransferencia', component: NovaTransferenciaComponent},
]

@NgModule(
  {
    //forRoot carrega as rotas no root da aplicação
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule{}
