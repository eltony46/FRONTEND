import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes: Estudiante[] = [];

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.estudianteService.getEstudiantes()
    .subscribe(response => this.estudiantes = response);
  }
  eliminarEstudiante(id: number){
    this.estudianteService.eliminarEstudiante(id)
    .subscribe(response =>{
      this.estudiantes = this.estudiantes.filter(estudiante => estudiante.id !=id);
    })
  }

}
