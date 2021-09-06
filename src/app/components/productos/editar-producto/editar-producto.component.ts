import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudproductoService } from 'src/app/services/crudproducto.service';
import { CrudclientesService } from 'src/app/services/crudclientes.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  formularioProducto:FormGroup;
  infoID:any;
  Clientes:any;

  constructor(private activeRoute:ActivatedRoute,
    private crudproductoService: CrudproductoService,
    private crudClientesService: CrudclientesService,
    public formulario:FormBuilder,
    private ruteador:Router) {
      this.infoID= this.activeRoute.snapshot.paramMap.get('id');

    this.crudproductoService.traerProducto(this.infoID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioProducto.setValue({
          nombre:respuesta[0]['nombre'],
          marca:respuesta[0]['marca'],
          modelo:respuesta[0]['modelo'],
          noSerie:respuesta[0]['noSerie'],
          fallo:respuesta[0]['fallo'],
          diagnostico:respuesta[0]['diagnostico'],
          anticipo:respuesta[0]['anticipo'],
          fechaEntrada:respuesta[0]['fechaEntrada'],
          idClienteP:respuesta[0]['idClienteP']
        });
      }
    );
    this.formularioProducto= this.formulario.group({
        nombre:[''],
        marca:[''],
        modelo:[''],
        noSerie:[''],
        fallo:[''],
        diagnostico:[''],
        anticipo:[''],
        fechaEntrada:[''],
        idClienteP:['']
    });

    this.crudClientesService.ObtenerCliente().subscribe(respuesta => {
      console.log(respuesta);
      this.Clientes = respuesta;
    });
   }

  ngOnInit(): void {
  }
  enviarDatosProducto():any{
    console.log(this.infoID);
    console.log(this.formularioProducto.value);
    this.crudproductoService.EditarProducto(this.infoID,this.formularioProducto.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-producto');
    });
  }
}
