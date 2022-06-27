import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { EstudianteFormComponent } from './components/estudiante-form/estudiante-form.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { AsignaturaFormComponent } from './components/asignatura-form/asignatura-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EstudiantesComponent,
    EstudianteFormComponent,
    IndexComponent,
    AsignaturaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
