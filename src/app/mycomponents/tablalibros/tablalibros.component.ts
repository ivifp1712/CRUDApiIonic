import { Component, OnInit } from '@angular/core';
import { libreriaService } from '../../services/libreria.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tablalibros',
  templateUrl: './tablalibros.component.html',
  styleUrls: ['./tablalibros.component.scss'],
})
export class TablalibrosComponent implements OnInit {
  libros : any = [];
  currentPage = 1;
  constructor(
    private libreriaService: libreriaService,
    private loadingCtrl: LoadingController

  ) {}

  ngOnInit() {
    this.loadLibros();
  }

  async loadLibros(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando libros...',
    });
    await loading.present();

    this.libreriaService.getLibros(this.currentPage).subscribe((res) => {
      loading.dismiss();
      // log 
      console.log(res);
      this.libros = res;
      event?.target.complete();
      if (event) {
        event.target.disabled = res.total_pages === this.currentPage ;
      }
      console.log(this.libros);
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
