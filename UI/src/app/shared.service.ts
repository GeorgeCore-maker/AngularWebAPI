import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly apiUrl = environment.apiUrl;
  readonly PhotoURL = environment.photoUrl;

constructor(private http: HttpClient) { }  getDepList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Department');
  }

  addDepartment(department: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'Department', department);
  }

  updateDepartment(department: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + 'Department', department);
  }

  deleteDepartment(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + 'Department/' + id);
  }

  getEmpList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Employee');
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'Employee', employee);
  }

  updateEmployee(employee: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + 'Employee', employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + 'Employee/' + id);
  }

  uploadPhoto(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'Employee/SaveFile', formData);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Department/GetAllDepartmentNames');
  }
}
