import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
   providers: [provideCharts(withDefaultRegisterables())],
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'organization-app';
}
