import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudproductoService } from 'src/app/services/crudproducto.service';
import { CrudclientesService } from 'src/app/services/crudclientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  formularioProducto: FormGroup;
  Clientes: any;


  constructor(public formulario: FormBuilder,
    private crudProductoServices: CrudproductoService,
    private crudClientesService: CrudclientesService,
    private ruteador: Router) {

    this.formularioProducto = this.formulario.group({
      nombre: [''],
      marca: [''],
      modelo: [''],
      noSerie: [''],
      fallo: [''],
      diagnostico: [''],
      anticipo: [''],
      fechaEntrada: [''],
      idClienteP: ['']
    });

    this.crudClientesService.ObtenerCliente().subscribe(respuesta => {
      console.log(respuesta);
      this.Clientes = respuesta;
    });
  }

  ngOnInit(): void {
  }
  enviarDatosProducto(): any {
    console.log("me precionaste");
    console.log(this.formularioProducto.value);

    this.crudProductoServices.AgregarProducto(this.formularioProducto.value).subscribe();
    this.ruteador.navigateByUrl('/listar-producto');
  }


}
