import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudclientesService } from 'src/app/services/crudclientes.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  formularioClientes:FormGroup;
  infoID:any;


  constructor(private activeRoute:ActivatedRoute,
              private crudClientesService: CrudclientesService,
              public formulario:FormBuilder,
              private ruteador:Router) {

    this.infoID= this.activeRoute.snapshot.paramMap.get('id');

    this.crudClientesService.traerCliente(this.infoID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioClientes.setValue({
          nombre:respuesta[0]['nombre'],
          apellido:respuesta[0]['apellido'],
          telefono:respuesta[0]['telefono'],
          correo:respuesta[0]['correo']
        });
      }
    );
    this.formularioClientes= this.formulario.group({
      nombre:[''],
      apellido:[''],
      telefono:[''],
      correo:['']
    }

    )
   }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log(this.infoID);
    console.log(this.formularioClientes.value);
    this.crudClientesService.EditarCliente(this.infoID,this.formularioClientes.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-cliente');
    });
  }
}
