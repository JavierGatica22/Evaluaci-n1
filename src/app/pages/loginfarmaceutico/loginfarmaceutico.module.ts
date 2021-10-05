import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginfarmaceuticoPageRoutingModule } from './loginfarmaceutico-routing.module';

import { LoginfarmaceuticoPage } from './loginfarmaceutico.page';
import { InputModule } from 'src/app/components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginfarmaceuticoPageRoutingModule,
    InputModule
  ],
  declarations: [LoginfarmaceuticoPage]
})
export class LoginfarmaceuticoPageModule {}
