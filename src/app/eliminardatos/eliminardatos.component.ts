import { Component, OnInit } from '@angular/core';
import { Datos } from '../datos';
import { DatosService } from '../datos.service';
import { Router } from '@angular/router';
import { identifierName, ThisReceiver } from '@angular/compiler';
import { getLocaleId } from '@angular/common';

@Component({
  selector: 'app-eliminardatos',
  templateUrl: './eliminardatos.component.html',
  styleUrls: ['./eliminardatos.component.css']
})
export class EliminardatosComponent implements OnInit {
  

  datos: Datos[];
  constructor(private eliminarservice:DatosService, private router3: Router) { }

  ngOnInit(): void {
    this.eliminarID();
  }

  eliminarID(){
    this.eliminarservice.eliminarDatos().subscribe(id =>{
      this.datos=id;
    });
    }
  irlistadatos(){
    this.router3.navigate(["./datos"]);
  }
  onSubmit(){
    this.eliminarID();
  }
}
