import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HabitCardComponent } from './habit-card/habit-card.component';

@Component({
  selector: 'app-habits',
  imports: [HabitCardComponent, CommonModule, FormsModule],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.css'
})
export class HabitsComponent {
  mostrarModal = false;
  newHabit = { id: 3 ,name: '', frequency: '' };
  habits = [
    { id: 1, name: 'Leer 30 minutos', frequency: 'Diario' },
    { id: 2, name: 'Ejercicio', frequency: '3 veces a la semana' },
    { id: 3, name: 'Meditar', frequency: 'Diario' },
    { id: 4, name: 'Beber 2 litros de agua', frequency: 'Diario' },
    { id: 5, name: 'Escribir en el diario', frequency: 'Cada semana' }
  ];

  crearHabito() {
    const nuevo = {
      ...this.newHabit
    };
    this.habits.push(nuevo);
    console.log('Nuevo hábito creado:', nuevo);
    this.newHabit = { id: 0, name: '', frequency: '' };
    this.mostrarModal = false;
  }

  addHabit() {
    console.log('Agregar hábito...');
  }

  editarHabito(habitEditado: any) {
    console.log('Editar hábito...', habitEditado);
    const index = this.habits.findIndex(h => h.id === habitEditado.id);
    if (index !== -1) this.habits[index] = habitEditado;
  }
  
  eliminarHabito(id: number) {
    this.habits = this.habits.filter(h => h.id !== id);
  }
}
