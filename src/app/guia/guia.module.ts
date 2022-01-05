import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GuiaRoutes } from './guia.routing';
// import { DatosEmpresaComponent } from './datos-empresa/datos-empresa.component';
// import { ImagenesPortadaComponent } from './imagenes-portada/imagenes-portada.component';
// import { CategoriasComponent } from './categorias/categorias.component';
// import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GuiaRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    // DatosEmpresaComponent,
    // ImagenesPortadaComponent,
    // CategoriasComponent,
    // PedidosComponent
  ]
})
export class GuiaModule { }
