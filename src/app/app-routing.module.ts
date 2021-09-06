import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './components/productos/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/productos/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './components/productos/listar-producto/listar-producto.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { ListarClienteComponent } from './components/clientes/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './components/clientes/editar-cliente/editar-cliente.component';

const routes: Routes = [

  {path:' ',pathMatch:'full', redirectTo:'agregar-cliente'},
  {path:'agregar-cliente', component:AgregarClienteComponent},
  {path:'listar-cliente', component:ListarClienteComponent},
  {path:'editar-cliente/:id', component:EditarClienteComponent},
  {path: 'agregar-producto', component:AgregarProductoComponent},
  {path: 'listar-producto', component:ListarProductoComponent},
  {path:'editar-producto/:id', component:EditarProductoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
