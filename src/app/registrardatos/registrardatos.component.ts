import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datos } from '../datos';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-registrardatos',
  templateUrl: './registrardatos.component.html',
  styleUrls: ['./registrardatos.component.css']
})
export class RegistrardatosComponent implements OnInit {

  datos: Datos = new Datos();
  constructor(private registroservicio: DatosService, private router: Router) {

   }

  ngOnInit(): void {
    console.log(this.datos);
  }
  guardardatos(){
    this.registroservicio.registrarDatos(this.datos).subscribe(dato => {
      console.log(dato);
      this.irlistadatos();
    })
  }
  irlistadatos(){
    this.router.navigate(["./datos"]);
  }
  onSubmit(){
    this.guardardatos();
  }
}
