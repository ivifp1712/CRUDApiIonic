import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { libreriaService } from '../services/libreria.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  libro: any;
  constructor(private route: ActivatedRoute, private libreriaService: libreriaService, private router : Router) {}

  ngOnInit() {
    this.libro = {
      isbn: '',
      titulo: '',
      autor: '',
      editorial: '',
      year: '',
      precio: '',
      stock: '',
      idioma: '',
      categoria: '',
    };

    var isbn: any;
    isbn = this.route.snapshot.paramMap.get('isbn');
    if (isbn) {
      this.libreriaService.getLibrosDetalles(isbn).subscribe((res) => {
        this.libro = res[0];
        console.log(this.libro);
      });
    }
  }

  guardar() {
    var libroBuscado: any;
    if (this.libro.isbn == '' || this.libro.titulo == '' || this.libro.autor == '' || this.libro.editorial == '' || this.libro.year == '' || this.libro.precio == '' || this.libro.stock == '' || this.libro.idioma == '' || this.libro.categoria == '') {
      alert("Rellena todos los campos");
    } else{
      this.libreriaService.getLibrosDetalles(this.libro.isbn).subscribe((res) => {
      libroBuscado = res[0];
      console.log(libroBuscado);
      if (libroBuscado != undefined){
      console.log("Actualizando libro");
      this.libreriaService.actualizarLibro(this.libro).subscribe((res) => {
        console.log(res);
      });
      this.libro = {
        isbn: '',
        titulo: '',
        autor: '',
        editorial: '',
        year: '',
        precio: '',
        stock: '',
        idioma: '',
        categoria: '',
      };
      } 
      else {
        console.log("Creando libro");
        this.libreriaService.guardarLibro(this.libro).subscribe((res) => {
          console.log(res);
        }
        );
        this.libro = {
          isbn: '',
          titulo: '',
          autor: '',
          editorial: '',
          year: '',
          precio: '',
          stock: '',
          idioma: '',
          categoria: '',
        };
      }
    });
    }
    this.router.navigate(['/tabs/tab1']);

  }

}
