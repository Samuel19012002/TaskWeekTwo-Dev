import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ActividadEstudio {
  id: number;
  materia: string;
  actividad: string;
  completada: boolean;
  prioridad: string;
}

@Component({
  imports: [CommonModule],
  selector: 'app-task-list',
  standalone: true,
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})
export class TaskList {
  mostrarMensaje = true;

  actividades: ActividadEstudio[] = [
    { id: 1, materia: 'Programación Web', actividad: 'Practicar directivas de Angular', completada: false, prioridad: 'Alta' },
    { id: 2, materia: 'Base de Datos', actividad: 'Resolver ejercicios de consultas SQL', completada: true, prioridad: 'Media' },
    { id: 3, materia: 'Redes', actividad: 'Estudiar el modelo OSI', completada: false, prioridad: 'Alta' },
    { id: 4, materia: 'Inglés Técnico', actividad: 'Repasar vocabulario de tecnología', completada: true, prioridad: 'Baja' },
    { id: 5, materia: 'Ingeniería de Software', actividad: 'Elaborar el diagrama de casos de uso', completada: false, prioridad: 'Media' }
  ];

  alternarMensaje() {
    this.mostrarMensaje = !this.mostrarMensaje;
  }

  cambiarEstado(actividad: ActividadEstudio) {
    actividad.completada = !actividad.completada;
  }
}
