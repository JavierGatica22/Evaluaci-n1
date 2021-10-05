import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginFarmaceuticoPageRoutingModule } from './login-farmaceutico-routing.module';

import { LoginFarmaceuticoPage } from './login-farmaceutico.page';
import { InputModule } from 'src/app/components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginFarmaceuticoPageRoutingModule,
    InputModule
  ],
  declarations: [LoginFarmaceuticoPage]
})
export class LoginFarmaceuticoPageModule {}
