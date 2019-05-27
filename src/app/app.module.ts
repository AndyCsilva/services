import { CursosModule } from './cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    CriarCursoModule
  ],
  providers: [
    // CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
