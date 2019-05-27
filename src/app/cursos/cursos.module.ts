import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CursosService
  ],
  exports: [
    CursosComponent
  ]

})
export class CursosModule { }
