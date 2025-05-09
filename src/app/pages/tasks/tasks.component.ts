import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card/task-card.component';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = [
    { id: 1, name: 'Sacar al perro', date: 'Mañana' },
    { id: 2, name: 'Preparar parcial Universidad', date: '8 de mayo' },
    { id: 3, name: 'Comprar víveres', date: '8 de mayo' },
    { id: 4, name: 'Enviar informe de progreso', date: '14 de mayo' },
    { id: 5, name: 'Llamar a mamá', date: '9 de mayo' },
  ];
}
