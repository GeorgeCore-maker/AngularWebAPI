import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { PrimeModule } from '../prime.module';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  imports: [CommonModule, PrimeModule, ShowEmployeeComponent, DatePipe]
})
export class EmployeeComponent implements OnInit {
  employeeList: any[] = [];
  departmentList: any[] = [];
  displayModal: boolean = false;
  isEditMode: boolean = false;
  employee: any = {
    EmployeeId: 0,
    EmployeeName: '',
    Department: null, // Cambiar de string a null
    DateOfJoining: null,
    PhotoFileName: ''
  };

  constructor(public service: SharedService) { }

  get photoURL(): string {
    return this.service.PhotoURL;
  }

  ngOnInit() {
    this.refreshEmpList();
    this.refreshDepList();
  }

  refreshEmpList() {
    this.service.getEmpList().subscribe(data => {
      this.employeeList = data;
    });
  }

  refreshDepList() {
    this.service.getDepList().subscribe(data => {
      this.departmentList = data;
    });
  }

  openNewEmployee() {
    this.isEditMode = false;
    this.employee = {
      EmployeeId: 0,
      EmployeeName: '',
      Department: null, // Cambiar de string vacío a null
      DateOfJoining: null,
      PhotoFileName: ''
    };
    this.displayModal = true;
  }

  editEmployee(emp: any) {
    this.isEditMode = true;
    this.employee = { ...emp }; // Clonar el objeto

    // Asegurar que Department sea numérico
    if (this.employee.Department) {
      this.employee.Department = parseInt(this.employee.Department);
    }

    // Convertir la fecha de string a Date object si es necesario
    if (this.employee.DateOfJoining) {
      this.employee.DateOfJoining = new Date(this.employee.DateOfJoining);
    }
    this.displayModal = true;
  }

  deleteEmployee(emp: any) {
    if (confirm(`Are you sure you want to delete employee "${emp.EmployeeName}"?`)) {
      this.service.deleteEmployee(emp.EmployeeId).subscribe({
        next: (res) => {
          this.refreshEmpList();
        },
        error: (err) => {
          console.error('Error deleting employee:', err);
        }
      });
    }
  }

  onModalSave() {
    this.refreshEmpList();
  }

  getDepartmentName(departmentId: string): string {
    const dept = this.departmentList.find(d => d.DepartmentId == departmentId);
    return dept ? dept.DepartmentName : departmentId;
  }
}
