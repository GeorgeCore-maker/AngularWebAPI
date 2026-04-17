import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { PrimeModule } from './prime.module';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrimeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UI';
  
  // Detectar si es modo demo
  isDemo = environment.production;

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
