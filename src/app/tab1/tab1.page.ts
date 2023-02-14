import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { libreriaService } from '../services/libreria.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  libros : any = [];
  currentPage = 1;
  constructor(
    private libreriaService: libreriaService,
    private loadingCtrl: LoadingController

  ) {}

  ngOnInit() {
  }

}
