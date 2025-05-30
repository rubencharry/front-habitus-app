import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [provideCharts(withDefaultRegisterables())], 
})
export class AppComponent {
  title = 'organization-app';
}
