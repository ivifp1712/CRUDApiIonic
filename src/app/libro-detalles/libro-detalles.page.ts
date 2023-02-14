import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { libreriaService } from '../services/libreria.service';

@Component({
  selector: 'app-libro-detalles',
  templateUrl: './libro-detalles.page.html',
  styleUrls: ['./libro-detalles.page.scss'],
})
export class LibroDetallesPage implements OnInit {
  libro : any;
 
  constructor(private route: ActivatedRoute, private libreriaService: libreriaService, private router : Router) { 
  }
 
  ngOnInit() {
    var isbn : any;
    isbn = this.route.snapshot.paramMap.get('isbn') ? this.route.snapshot.paramMap.get('isbn') : "978-84-376-0494-7";
    console.log(isbn);
    this.libreriaService.getLibrosDetalles(isbn).subscribe((res) => {
      this.libro = res[0];
      console.log(this.libro);
    });
    console.log(this.libro);
  }

  borrar(){
    this.libreriaService.borrarLibro(this.libro.isbn).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['/tabs/tab1']);
  }

}
