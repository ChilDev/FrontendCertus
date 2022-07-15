import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datos } from './datos';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  private baseURL = "http://localhost:8080/ApiRest/datos"

  constructor(private httpClient: HttpClient){ }
    //Obtener datos
  obtenerListaDatos():Observable<Datos[]>{
      return this.httpClient.get<Datos[]>(`${this.baseURL}`);
    }
    //Registrar datos
  registrarDatos(datos:Datos):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, datos);
  }
    //Actualizar datos
  actualizarDatos(datos:Datos):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`, datos);
  }
    //Eliminar datos
  eliminarDatos(datos:Datos):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`);
  }
}

