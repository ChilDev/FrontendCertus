import { Component, OnInit } from '@angular/core';
import { Datos } from '../datos';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-datospersonas',
  templateUrl: './datospersonas.component.html',
  styleUrls: ['./datospersonas.component.css']
})
export class DatospersonasComponent implements OnInit {
  
  datos: Datos[];

  // constructor(){}

  // ngOnInit(): void {
  //   this.datos = [
  //     {
  //       "nombre": "Pepe",
  //       "correo": "ike@gmail.com",
  //       "edad": 19,
  //       "id_datos": 2
  //   }
  //   ]
  // }

  constructor(private datosservice: DatosService ) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }
  private obtenerDatos(){
    this.datosservice.obtenerListaDatos().subscribe(dato => {
      this.datos = dato;
    });
  }

}
