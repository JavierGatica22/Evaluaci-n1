import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFarmaceuticoPage } from './login-farmaceutico.page';

const routes: Routes = [
  {
    path: '',
    component: LoginFarmaceuticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginFarmaceuticoPageRoutingModule {}
