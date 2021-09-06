import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgregarProductoComponent } from './components/productos/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/productos/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './components/productos/listar-producto/listar-producto.component';

import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './components/clientes/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './components/clientes/listar-cliente/listar-cliente.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    ListarClienteComponent,
    HeaderComponent,
    FooterComponent 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
