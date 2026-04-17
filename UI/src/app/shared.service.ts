import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { environment } from '../environments/environment';
import { mockData } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly apiUrl = environment.apiUrl;
  readonly PhotoURL = environment.photoUrl;
  
  // Simulador de datos para demo
  private mockDepartments = [...mockData.departments];
  private mockEmployees = [...mockData.employees];
  private nextEmployeeId = 11;
  private nextDepartmentId = 11;

constructor(private http: HttpClient) { }

  // Método auxiliar para determinar si usar datos mock
  private useMockData(): boolean {
    return environment.production && (this.apiUrl.includes('your-api-server') || this.apiUrl.includes('localhost'));
  }

  // Simular delay de red para hacer más realista la demo
  private simulateDelay<T>(data: T): Observable<T> {
    return of(data).pipe(delay(500));
  }

  getDepList(): Observable<any[]> {
    if (this.useMockData()) {
      return this.simulateDelay([...this.mockDepartments]);
    }
    return this.http.get<any[]>(this.apiUrl + 'Department');
  }

  addDepartment(department: any): Observable<any> {
    if (this.useMockData()) {
      const newDept = { 
        ...department, 
        DepartmentId: this.nextDepartmentId++ 
      };
      this.mockDepartments.push(newDept);
      return this.simulateDelay(newDept);
    }
    return this.http.post<any>(this.apiUrl + 'Department', department);
  }

  updateDepartment(department: any): Observable<any> {
    if (this.useMockData()) {
      const index = this.mockDepartments.findIndex(d => d.DepartmentId === department.DepartmentId);
      if (index !== -1) {
        this.mockDepartments[index] = { ...department };
      }
      return this.simulateDelay(department);
    }
    return this.http.put<any>(this.apiUrl + 'Department', department);
  }

  deleteDepartment(id: number): Observable<any> {
    if (this.useMockData()) {
      const index = this.mockDepartments.findIndex(d => d.DepartmentId === id);
      if (index !== -1) {
        this.mockDepartments.splice(index, 1);
      }
      // También eliminar empleados de ese departamento
      this.mockEmployees = this.mockEmployees.filter(e => e.Department !== id);
      return this.simulateDelay({ success: true });
    }
    return this.http.delete<any>(this.apiUrl + 'Department/' + id);
  }

  getEmpList(): Observable<any[]> {
    if (this.useMockData()) {
      return this.simulateDelay([...this.mockEmployees]);
    }
    return this.http.get<any[]>(this.apiUrl + 'Employee');
  }

  addEmployee(employee: any): Observable<any> {
    if (this.useMockData()) {
      const newEmp = { 
        ...employee, 
        EmployeeId: this.nextEmployeeId++,
        PhotoFileName: employee.PhotoFileName || 'anonymous.png'
      };
      this.mockEmployees.push(newEmp);
      return this.simulateDelay(newEmp);
    }
    return this.http.post<any>(this.apiUrl + 'Employee', employee);
  }

  updateEmployee(employee: any): Observable<any> {
    if (this.useMockData()) {
      const index = this.mockEmployees.findIndex(e => e.EmployeeId === employee.EmployeeId);
      if (index !== -1) {
        this.mockEmployees[index] = { ...employee };
      }
      return this.simulateDelay(employee);
    }
    return this.http.put<any>(this.apiUrl + 'Employee', employee);
  }

  deleteEmployee(id: number): Observable<any> {
    if (this.useMockData()) {
      const index = this.mockEmployees.findIndex(e => e.EmployeeId === id);
      if (index !== -1) {
        this.mockEmployees.splice(index, 1);
      }
      return this.simulateDelay({ success: true });
    }
    return this.http.delete<any>(this.apiUrl + 'Employee/' + id);
  }

  uploadPhoto(formData: any): Observable<any> {
    if (this.useMockData()) {
      // Simular subida exitosa de foto
      const fileName = `demo_photo_${Date.now()}.jpg`;
      return this.simulateDelay({ fileName: fileName });
    }
    return this.http.post<any>(this.apiUrl + 'Employee/SaveFile', formData);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Department/GetAllDepartmentNames');
  }
}
