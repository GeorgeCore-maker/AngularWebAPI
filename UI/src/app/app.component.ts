import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PrimeModule } from './prime.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UI';

  menuItems: MenuItem[] = [
    {
      label: 'Employees',
      icon: 'pi pi-users',
      routerLink: '/employee'
    },
    {
      label: 'Departments',
      icon: 'pi pi-building',
      routerLink: '/department'
    }
  ];
}
