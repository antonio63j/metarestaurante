import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PoliticasRoutes } from './politica.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PoliticasRoutes),
    NgbModule,
  ],
  declarations: [

  ]
})
export class PoliticaModule { }
