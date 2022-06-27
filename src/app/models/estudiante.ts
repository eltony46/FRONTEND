import { Asignatura } from "./asignatura";

export class Estudiante {
  id!: number
  nombre!: string;
  apellido!:string;
  correo!: string;
  sigla!: string;
  imagen!: string;
  asignatura!: Asignatura;


}
