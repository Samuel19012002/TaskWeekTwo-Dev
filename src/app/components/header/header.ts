import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  standalone: true,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  titulo = 'Agenda de estudio';
  descripcion = 'Organiza y controla tus actividades académicas';
  curso = 'Desarrollo de Aplicaciones Web Avanzado';
}
