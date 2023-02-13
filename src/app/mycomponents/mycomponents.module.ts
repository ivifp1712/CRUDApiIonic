import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablalibrosComponent } from './tablalibros/tablalibros.component';


@NgModule({
  declarations: [ TablalibrosComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [ TablalibrosComponent]
})
export class MycomponentsModule { }
