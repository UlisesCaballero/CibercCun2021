import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class CrudclientesService {
  API:string='http://localhost/Api/clientes.php';

  constructor(private clienteHttp:HttpClient) { }

  AgregarCliente(datosCliente:Cliente):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosCliente);
  }
  ObtenerCliente(){
    return this.clienteHttp.get(this.API);
  }

  BorrarCliente(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }
  traerCliente(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }
  EditarCliente(id:any, datosCliente:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosCliente);
  }
}
