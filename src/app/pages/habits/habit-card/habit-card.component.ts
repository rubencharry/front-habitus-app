import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-habit-card',
  templateUrl: './habit-card.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./habit-card.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HabitCardComponent {
  @Input() habit!: { id: number; name: string; frequency: string };
  @Output() editar = new EventEmitter<any>();
  @Output() eliminar = new EventEmitter<number>();

  editando = false;
  editado = { name: '', frequency: '' };

  iniciarEdicion() {
    this.editando = true;
    this.editado = { ...this.habit };
  }

  guardarEdicion() {
    this.editando = false;
    this.editar.emit({ id: this.habit.id, ...this.editado });
  }

  cancelar() {
    this.editando = false;
  }

  eliminarHabito() {
    this.eliminar.emit(this.habit.id);
  }
}
