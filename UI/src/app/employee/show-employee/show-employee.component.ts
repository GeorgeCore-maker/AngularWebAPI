import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../shared.service';
import { CommonModule } from '@angular/common';
import { PrimeModule } from '../../prime.module';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-show-employee',
  standalone: true,
  imports: [CommonModule, PrimeModule, FormsModule],
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css'],
  providers: [MessageService]
})
export class ShowEmployeeComponent implements OnInit, OnChanges {
  @Input() displayModal: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() set employee(value: any) {
    this._employee = { ...value };
    // Asegurar que Department sea numérico para el dropdown
    if (this._employee.Department && typeof this._employee.Department === 'string') {
      // Si es string, intentar convertir a número
      const departmentId = parseInt(this._employee.Department);
      if (!isNaN(departmentId)) {
        this._employee.Department = departmentId;
      }
    }
  }

  get employee() {
    return this._employee;
  }

  private _employee: any = {
    EmployeeId: 0,
    EmployeeName: '',
    Department: null,
    DateOfJoining: null,
    PhotoFileName: ''
  };
  @Input() departmentList: any[] = [];
  @Output() displayModalChange = new EventEmitter<boolean>();
  @Output() onSave = new EventEmitter<void>();

  selectedFile: File | null = null;

  constructor(
    public service: SharedService,
    private messageService: MessageService
  ) { }

  get photoURL(): string {
    return this.service.PhotoURL;
  }

  onImageError(event: any) {
    console.error('Error loading image:', event);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['employee'] && this.employee) {
    }
    if (changes['departmentList'] && this.departmentList) {
    }
  }

  closeModal() {
    this.displayModal = false;
    this.displayModalChange.emit(this.displayModal);
    this.selectedFile = null;
  }

  onFileSelect(event: any) {
    this.selectedFile = event.files[0];
    if (this.selectedFile) {
      // Subir la imagen al servidor inmediatamente
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.service.uploadPhoto(formData).subscribe({
        next: (response) => {
          // Asumiendo que el servidor devuelve el nombre del archivo
          this.employee.PhotoFileName = response.fileName || this.selectedFile!.name;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Photo uploaded successfully'
          });
        },
        error: (error) => {
          console.error('Error uploading photo:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to upload photo'
          });
        }
      });
    }
  }

  saveEmployee() {
    // Convertir la fecha a string ISO si es necesario
    const employeeData = { ...this.employee };
    if (employeeData.DateOfJoining) {
      employeeData.DateOfJoining = new Date(employeeData.DateOfJoining).toISOString().split('T')[0];
    }

    if (this.isEditMode) {
      // Actualizar empleado existente
      this.service.updateEmployee(employeeData).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Employee updated successfully'
          });
          this.closeModal();
          this.onSave.emit();
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to update employee'
          });
        }
      });
    } else {
      // Crear nuevo empleado
      this.service.addEmployee(employeeData).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Employee created successfully'
          });
          this.closeModal();
          this.onSave.emit();
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to create employee'
          });
        }
      });
    }
  }
}
