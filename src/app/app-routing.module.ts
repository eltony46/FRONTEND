import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteFormComponent } from './components/estudiante-form/estudiante-form.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {path:'', component: EstudiantesComponent},
  {path:'formulario', component: EstudianteFormComponent},
  {path:'formulario/:id', component: EstudianteFormComponent},
  {path: 'index', component: IndexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
