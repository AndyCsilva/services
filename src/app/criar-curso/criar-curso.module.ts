import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CriarCursoComponent } from './criar-curso.component';
import { CursosComponent } from './../cursos/cursos.component';
import { CursosService } from './../cursos/cursos.service';

@NgModule({
  declarations: [
    CursosComponent,
    CriarCursoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CursosService],
  exports: [CriarCursoModule]

})
export class CriarCursoModule { }
