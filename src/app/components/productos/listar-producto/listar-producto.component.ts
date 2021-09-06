import { Component, OnInit } from '@angular/core';
import { CrudproductoService } from 'src/app/services/crudproducto.service';
import { CrudclientesService } from 'src/app/services/crudclientes.service';


@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  Productos:any;
  Clientes:any;

  constructor(private crudProductoService: CrudproductoService,
              private crudClientesService: CrudclientesService
              ) { }
  ngOnInit(): void {

    this.crudProductoService.ObtenerProducto().subscribe(respuesta => {
      console.log(respuesta);
      this.Productos = respuesta;
    });

    this.crudClientesService.ObtenerCliente().subscribe(respuesta => {
      console.log(respuesta);
      this.Clientes = respuesta;
    });
  }

  borrarRegistro(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    this.crudProductoService.BorrarProducto(id).subscribe((respuesta)=>{
      this.Productos.splice(iControl,1);
    });
  }
}
