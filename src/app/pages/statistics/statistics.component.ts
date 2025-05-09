import { CommonModule } from '@angular/common';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { options } from '@fullcalendar/core/preact.js';

@Component({
  selector: 'app-statistics',

  imports: [CommonModule, FormsModule, BaseChartDirective],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
})
export class StatisticsComponent {
  habits = [
    { id: 1, name: 'Leer 30 minutos', completed: false },
    { id: 2, name: 'Ejercicio', completed: false },
    { id: 3, name: 'Meditar', completed: false },
    { id: 4, name: 'Beber 2 litros de agua', completed: true },
    { id: 5, name: 'Escribir en el diario', completed: true },
  ];

  tareas = [
    { id: 1, name: 'Preparar parcial', limit: '2025-05-12', completed: true },
    { id: 2, name: 'Sacar al perro', limit: '2025-05-10', completed: false },
    { id: 3, name: 'Comprar víveres', limit: '2025-05-08', completed: false },
    {
      id: 4,
      name: 'Enviar informe de progreso',
      limit: '2025-05-14',
      completed: false,
    },
    { id: 5, name: 'Llamar a mamá', limit: '2025-05-09', completed: false },
  ];

  habitsCompletados: number = 0;
  totalHabitos: number = 0;
  habitsPorcentaje: number = 0;

  tareasCompletadas: number = 0;
  totalTareas: number = 0;
  tareasPorcentaje: number = 0;

  ngOnInit() {
    this.calcularEstadisticas();
  }

  calcularEstadisticas() {
    // HÁBITOS
    this.totalHabitos = this.habits.length;
    this.habitsCompletados = this.habits.filter((h) => h.completed).length;
    this.habitsPorcentaje =
      this.totalHabitos > 0
        ? (this.habitsCompletados / this.totalHabitos) * 100
        : 0;

    // TAREAS
    this.totalTareas = this.tareas.length;
    this.tareasCompletadas = this.tareas.filter((t) => t.completed).length;
    this.tareasPorcentaje =
      this.totalTareas > 0
        ? (this.tareasCompletadas / this.totalTareas) * 100
        : 0;
  }

  habitsChartData: ChartData<'doughnut'> = {
    labels: ['Completados', 'Pendientes'],
    datasets: [
      {
        label: 'Hábitos',
        data: [
          this.habits.filter((h) => h.completed).length,
          this.habits.filter((h) => !h.completed).length,
        ],
        backgroundColor: ['#4ade80', '#f87171'],
      },
    ],
  };

  habitsChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
          font: {
            family: 'Poppins',
            size: 14,
          },
        },
      },
    },
  };

  tasksChartData: ChartData<'doughnut'> = {
    labels: ['Completadas', 'Pendientes'],
    datasets: [
      {
        label: 'Tareas',
        data: [
          this.tareas.filter((t) => t.completed).length,
          this.tareas.filter((t) => !t.completed).length,
        ],
        backgroundColor: ['#60a5fa', '#facc15'],
      },
    ],
  };

  tasksChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'black',
          font: {
            family: 'Poppins',
            size: 14,
          },
        },
      },
    },
  };

  habitsChartType: ChartType = 'doughnut';
  tasksChartType: ChartType = 'doughnut';
}
