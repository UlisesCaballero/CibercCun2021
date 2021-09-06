import { Component, OnInit } from '@angular/core';
import { CrudclientesService } from 'src/app/services/crudclientes.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  Clientes:any;

  constructor(private crudClienteService:CrudclientesService) { }

  ngOnInit(): void {
    this.crudClienteService.ObtenerCliente().subscribe(respuesta => {
      console.log(respuesta);
      this.Clientes = respuesta;
    });
  }
  borrarRegistro(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    this.crudClienteService.BorrarCliente(id).subscribe((respuesta)=>{
      this.Clientes.splice(iControl,1);
    });
  }

}
