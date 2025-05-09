import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HabitsComponent } from './pages/habits/habits.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'habits', component: HabitsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'statistics', component: StatisticsComponent },
];
