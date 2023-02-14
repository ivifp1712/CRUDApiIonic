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
      fecha: '',
      portada: '',
      descripcion: '',
      precio: '',
      url: '',
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
    if (this.libro.isbn == '' || this.libro.titulo == '' || this.libro.autor == '' || this.libro.editorial == '' || this.libro.fecha == '' || this.libro.portada == '' || this.libro.descripcion == '' || this.libro.precio == '' || this.libro.url == '') {
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
        fecha: '',
        portada: '',
        descripcion: '',
        precio: '',
        url: '',
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
          fecha: '',
          portada: '',
          descripcion: '',
          precio: '',
          url: '',
        };
      }
    });
    }
    this.router.navigate(['/tabs/tab1']);

  }

}
