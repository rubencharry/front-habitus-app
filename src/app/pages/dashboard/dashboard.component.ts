import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Habit {
  id: number;
  name: string;
  completed: boolean; 
}

interface Task {
  id: number;
  name: string;
  limit: string; 
  completed: boolean;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  habits: Habit[] = [
    { id: 1, name: 'Leer 30 minutos', completed: false },
    { id: 2, name: 'Ejercicio', completed: false },
    { id: 3, name: 'Meditar', completed: false },
    { id: 4, name: 'Beber 2 litros de agua', completed: false },
    { id: 5, name: 'Escribir en el diario', completed: false }
  ];

  showToast = false;

  guardarEstado(habit: Habit) {
    if (habit.completed) {
      this.mostrarToast();
    }

    // Aquí puedes guardar en backend si lo deseas
    // this.habitService.actualizarHabito(habit).subscribe();
  }

  mostrarToast() {
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 2000); 
  }

  // Tareas pendientes

  tareas: Task[] = [
    { id: 1, name: 'Preparar parcial', limit: '2025-05-12', completed: false },
    { id: 2, name: 'Sacar al perro', limit: '2025-05-10', completed: false },
    { id: 3, name: 'Comprar víveres', limit: '2025-05-08', completed: false },
    { id: 4, name: 'Enviar informe de progreso', limit: '2025-05-14', completed: false },
    { id: 5, name: 'Llamar a mamá', limit: '2025-05-09', completed: false },
  ];

  showTaskToast = false;

  guardarEstadoTarea(tarea: Task) {
    if (tarea.completed) {
      this.mostrarTaskToast();
    }
    // Si necesitas guardar en backend:
    // this.tareaService.actualizarTarea(tarea).subscribe();
  }

  mostrarTaskToast() {
    this.showTaskToast = true;
    setTimeout(() => (this.showTaskToast = false), 2000);
  }

  calcularTiempoRestante(fechaLimite: string): string {
    const hoy = new Date();
    const limite = new Date(fechaLimite);
    const diferenciaMs = limite.getTime() - hoy.getTime();
    const diasRestantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

    if (diasRestantes > 1) {
      return `Faltan ${diasRestantes} días`;
    } else if (diasRestantes === 1) {
      return 'Falta 1 día';
    } else if (diasRestantes === 0) {
      return 'Es hoy';
    } else {
      return 'Vencida';
    }
  }

  calcularDiasRestantes(fechaLimite: string): number {
    const hoy = new Date();
    const limite = new Date(fechaLimite);
    const diferenciaMs = limite.getTime() - hoy.getTime();
    return Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
  }

  obtenerClaseTiempoRestante(fechaLimite: string): string {
    const dias = this.calcularDiasRestantes(fechaLimite);
    if (dias > 2) return 'text-green-600';
    if (dias > 0) return 'text-yellow-600';
    return 'text-red-500';
  }

  

}
