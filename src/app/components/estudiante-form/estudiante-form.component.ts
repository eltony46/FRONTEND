import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/models/asignatura';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-estudiante-form',
  templateUrl: './estudiante-form.component.html',
  styleUrls: ['./estudiante-form.component.css']
})
export class EstudianteFormComponent implements OnInit {

  estudiante: Estudiante= new Estudiante();

  asignaturas: Asignatura[] = [];


  constructor(private estudianteService: EstudianteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.estudianteService.getAsignaturas()
    .subscribe(response => this.asignaturas = response);

    this.activatedRoute.params
      .subscribe(params =>{
        let id: number= params['id'];

        if(id){
          this.estudianteService.obtenerEstudiante (id)
            .subscribe(response => this.estudiante = response);
        }
      })

  }
  listarEstudiante(){
     this.estudianteService.listarEstudiante(this.estudiante)
     .subscribe(response =>  this.router.navigate(['']));
  }

  actualizarEstudiante(){
    this.estudianteService.actuallizarEstudiante(this.estudiante)
    .subscribe(response => this.router.navigate(['']));
  }

  compararEstudiante(o1: Estudiante, o2: Estudiante):boolean{
    if(o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 ===null || o1 === undefined || o2 === undefined ? false: o1.id == o2.id;
  }

}
