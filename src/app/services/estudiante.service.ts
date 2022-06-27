import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignatura } from '../models/asignatura';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  url: string = 'http://localhost:8080/api/estudiantes';

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.url+'/listar');
  }

   getAsignaturas(): Observable<Asignatura[]>{
    return this.http.get<Asignatura[]>(this.url+'/asignaturas');

  }

  listarEstudiante(estudiante: Estudiante): Observable<Estudiante>{
    return this.http.post<Estudiante>(this.url+'/listar', estudiante);
  }

  obtenerEstudiante(id: number): Observable<Estudiante>{
    return this.http.get<Estudiante>(this.url+'/'+id);
  }



  actuallizarEstudiante(estudiante:Estudiante): Observable<Estudiante>{
    return this.http.put<Estudiante>(this.url+'/actualizar/'+estudiante.id, estudiante);
  }

  eliminarEstudiante(id: number): Observable<any>{
    return this.http.delete<any>(this.url+'/eliminar/'+id)
  }


}
