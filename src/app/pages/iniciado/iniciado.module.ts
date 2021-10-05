import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciadoPageRoutingModule } from './iniciado-routing.module';

import { IniciadoPage } from './iniciado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciadoPageRoutingModule
  ],
  declarations: [IniciadoPage]
})
export class IniciadoPageModule {}
