import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },

          { path: 'dashboard', 
            loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule)},

          { path: 'contacto', 
            loadChildren: () => import('../contacto/contacto.module').then((m) => m.ContactoModule)},

          { path: 'ventajas', 
            loadChildren: () => import('../ventajas/ventajas.module').then((m) => m.VentajasModule)},

          { path: 'guia',
            loadChildren: () => import('../guia/guia.module').then(m => m.GuiaModule)
          },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
