import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';


export interface Habit {
  id: number;
  title: string;
  description: string;
  frequency: string;
}

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  private apiUrl = `${environment.url}`;

  constructor(private http: HttpClient) {}

  // Obtener todos los habits
  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>(`${this.apiUrl}/habits`);
  }

  // Obtener habit por ID
  getHabitById(id: number | string): Observable<Habit> {
    return this.http.get<Habit>(`${this.apiUrl}/habits/${id}`);
  }

  // Crear un nuevo habit
  createHabit(habit: Habit): Observable<Habit> {
    return this.http.post<Habit>(`${this.apiUrl}/habits`, habit);
  }

  // Actualizar un habit existente
  updateHabit(id: number | string, habit: Habit): Observable<Habit> {
    return this.http.put<Habit>(`${this.apiUrl}/habits/${id}`, habit);
  }

  // Eliminar un habit
  deleteHabit(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/habits/${id}`);
  }
}