import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciadoPage } from './iniciado.page';

const routes: Routes = [
  {
    path: '',
    component: IniciadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciadoPageRoutingModule {}
