import { Component, OnInit } from '@angular/core';
import { Datos } from '../datos';
import { Router } from '@angular/router';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-actualizardatos',
  templateUrl: './actualizardatos.component.html',
  styleUrls: ['./actualizardatos.component.css']
})
export class ActualizardatosComponent implements OnInit {
  
  datos: Datos = new Datos();
  constructor(private actualizarservicio: DatosService, private router2: Router) { }

  ngOnInit(): void {
    console.log(this.datos);
  }
  actualizardatos(){
    this.actualizarservicio.actualizarDatos(this.datos).subscribe(dato => {
      console.log(dato);
      this.irlistadatos();
    });
  }
  irlistadatos(){
    this.router2.navigate(["./datos"]);
  }
  onSubmit(){
    this.actualizardatos();
  }

}
