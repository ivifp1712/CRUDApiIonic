import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibroDetallesPageRoutingModule } from './libro-detalles-routing.module';

import { LibroDetallesPage } from './libro-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibroDetallesPageRoutingModule
  ],
  declarations: [LibroDetallesPage]
})
export class LibroDetallesPageModule {}
