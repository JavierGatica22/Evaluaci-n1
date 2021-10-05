import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadofarmaciasPageRoutingModule } from './listadofarmacias-routing.module';

import { ListadofarmaciasPage } from './listadofarmacias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadofarmaciasPageRoutingModule
  ],
  declarations: [ListadofarmaciasPage]
})
export class ListadofarmaciasPageModule {}
