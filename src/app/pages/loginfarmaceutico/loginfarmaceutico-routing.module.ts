import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginfarmaceuticoPage } from './loginfarmaceutico.page';

const routes: Routes = [
  {
    path: '',
    component: LoginfarmaceuticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginfarmaceuticoPageRoutingModule {}
