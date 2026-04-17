import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../shared.service';
import { CommonModule } from '@angular/common';
import { PrimeModule } from '../../prime.module';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-show-department',
  standalone: true,
  imports: [CommonModule, PrimeModule, FormsModule],
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css'],
  providers: [MessageService]
})
export class ShowDepartmentComponent implements OnInit {
  @Input() displayModal: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() department: any = { DepartmentId: 0, DepartmentName: '' };
  @Output() displayModalChange = new EventEmitter<boolean>();
  @Output() onSave = new EventEmitter<void>();

  constructor(
    private service: SharedService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.displayModal = false;
    this.displayModalChange.emit(this.displayModal);
  }

  saveDepartment() {
    if (this.isEditMode) {
      // Actualizar departamento existente
      this.service.updateDepartment(this.department).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Department updated successfully'
          });
          this.closeModal();
          this.onSave.emit();
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to update department'
          });
        }
      });
    } else {
      // Crear nuevo departamento
      this.service.addDepartment(this.department).subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Department created successfully'
          });
          this.closeModal();
          this.onSave.emit();
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to create department'
          });
        }
      });
    }
  }
}
