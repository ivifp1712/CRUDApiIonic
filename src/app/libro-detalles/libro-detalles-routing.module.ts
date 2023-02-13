import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibroDetallesPage } from './libro-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: LibroDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibroDetallesPageRoutingModule {}
