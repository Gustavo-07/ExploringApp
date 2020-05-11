import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarSitioTuristicoPage } from './registrar-sitio-turistico.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarSitioTuristicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarSitioTuristicoPageRoutingModule {}
