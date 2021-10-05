import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadofarmaciasPage } from './listadofarmacias.page';

const routes: Routes = [
  {
    path: '',
    component: ListadofarmaciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadofarmaciasPageRoutingModule {}
