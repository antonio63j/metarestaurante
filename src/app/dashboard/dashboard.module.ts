import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { PortadaComponent } from "./dashboard-components/portada/portada.component";
import { CardsUsuariosComponent } from "./dashboard-components/cards-usuarios/cards-usuarios.component";
import { CardsClientesComponent } from "./dashboard-components/cards-clientes/cards-clientes.component";

const routes: Routes = [
  {
    path: "",
    // data: {
    //   title: "Dashboard",
    //   urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    // },
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [
    PortadaComponent,
    CardsUsuariosComponent,
    CardsClientesComponent,
  
    DashboardComponent,
  ],
})
export class DashboardModule {}
