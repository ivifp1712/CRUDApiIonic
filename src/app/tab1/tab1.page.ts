import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { libreriaService } from '../services/libreria.service';
import { environment } from 'src/environments/environment';

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
    this.loadLibros();
  }

  refrescar(){
    this.loadLibros();
  }

  async loadLibros(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando libros...',
    });
    await loading.present();

    this.libreriaService.getLibros(this.currentPage).subscribe((res) => {
      loading.dismiss();
      //console.log(res);
      this.libros = res;
      event?.target.complete();
      if (event) {
        event.target.disabled = res.total_pages === this.currentPage ;
      }
      //console.log(this.libros);
    },
    (error) => {
      loading.dismiss();
      console.log(error);
    }
    );
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadLibros(event);
  }




}
