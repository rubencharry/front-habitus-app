import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HabitCardComponent } from './habit-card/habit-card.component';
import { HabitService, Habit } from '../../services/habits/habit.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-habits',
  imports: [HabitCardComponent, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.css'
})
export class HabitsComponent implements OnInit {
  mostrarModal = false;
  newHabit = { id: 0, title: '', description: '', frequency: '' };
  habits: Habit[] = [];

  constructor(private habitService: HabitService) { }

  ngOnInit() {
    this.loadHabits();
  }

  loadHabits(): void {
    this.habitService.getHabits().subscribe({
      next: (data) => this.habits = data,
      error: (err) => console.error('Error cargando hábitos', err)
    });
  }

  crearHabito() {
    this.habitService.createHabit(this.newHabit).subscribe({
      next: (nuevoHabito) => {
        this.habits.push(nuevoHabito);
        console.log('Hábito creado exitosamente:', nuevoHabito);
        this.loadHabits();
        this.newHabit = {id: 0, title: '', description: '', frequency: '' };
        this.mostrarModal = false;
      },
      error: (err) => {
        console.error('Error al crear hábito:', err);
      }
    });
  }

  editarHabito(habitEditado: any) {
    // console.log('Editar hábito...', habitEditado);
    // const index = this.habits.findIndex(h => h.id === habitEditado.id);
    // if (index !== -1) this.habits[index] = habitEditado;
  }

  eliminarHabito(id: number) {
    // this.habits = this.habits.filter(h => h.id !== id);
  }
}
