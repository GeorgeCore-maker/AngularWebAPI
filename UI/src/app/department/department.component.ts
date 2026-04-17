import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { PrimeModule } from '../prime.module';
import { ShowDepartmentComponent } from './show-department/show-department.component';

@Component({
  standalone: true,
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  imports: [PrimeModule, ShowDepartmentComponent]
})
export class DepartmentComponent implements OnInit {
  departmentList: any[] = [];
  displayModal: boolean = false;
  isEditMode: boolean = false;
  department: any = {
    DepartmentId: 0,
    DepartmentName: ''
  };

  constructor(private service: SharedService) { }

  ngOnInit() {
    this.refreshDepList();
  }

  refreshDepList() {
    this.service.getDepList().subscribe(data => {
      this.departmentList = data;
    });
  }

  openNewDepartment() {
    this.isEditMode = false;
    this.department = {
      DepartmentId: 0,
      DepartmentName: ''
    };
    this.displayModal = true;
  }

  editDepartment(dept: any) {
    this.isEditMode = true;
    this.department = { ...dept }; // Clonar el objeto
    this.displayModal = true;
  }

  deleteDepartment(dept: any) {
    if (confirm(`Are you sure you want to delete department "${dept.DepartmentName}"?`)) {
      this.service.deleteDepartment(dept.DepartmentId).subscribe({
        next: (res) => {
          this.refreshDepList();
        },
        error: (err) => {
          console.error('Error deleting department:', err);
        }
      });
    }
  }

  onModalSave() {
    this.refreshDepList();
  }
}
