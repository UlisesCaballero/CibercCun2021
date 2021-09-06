import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class CrudproductoService {
  API:string='http://localhost/Api/productos.php';

  constructor(private productoHttp:HttpClient) { }

  AgregarProducto(datosProducto:Producto):Observable<any>{
    return this.productoHttp.post(this.API+"?insertar=1",datosProducto);
  }
  ObtenerProducto(){
    return this.productoHttp.get(this.API);
  }

  BorrarProducto(id:any):Observable<any>{
    return this.productoHttp.get(this.API+"?borrar="+id);
  }
  traerProducto(id:any):Observable<any>{
    return this.productoHttp.get(this.API+"?consultar="+id);
  }
  EditarProducto(id:any, datosProducto:any):Observable<any>{
    return this.productoHttp.post(this.API+"?actualizar="+id,datosProducto);
  }
}
