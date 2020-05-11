import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarSitioTuristicoPageRoutingModule } from './registrar-sitio-turistico-routing.module';

import { RegistrarSitioTuristicoPage } from './registrar-sitio-turistico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarSitioTuristicoPageRoutingModule
  ],
  declarations: [RegistrarSitioTuristicoPage]
})
export class RegistrarSitioTuristicoPageModule {}
