import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudclientesService } from 'src/app/services/crudclientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {
  formularioClientes:FormGroup;

  constructor(public formulario:FormBuilder,
              private crudClientesServices:CrudclientesService,
              private ruteador:Router) { 
    this.formularioClientes=this.formulario.group({
      nombre:[''],
      apellido:[''],
      telefono:[''],
      correo:['']
    });
  }

  ngOnInit(): void {}   

  enviarDatos():any{
      console.log("me precionaste");
      console.log(this.formularioClientes.value);

      this.crudClientesServices.AgregarCliente(this.formularioClientes.value).subscribe();

      this.ruteador.navigateByUrl('/listar-cliente');
  }

  }


