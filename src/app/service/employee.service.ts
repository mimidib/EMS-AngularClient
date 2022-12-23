import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from '../model/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url: string = 'http://localhost:8081/api/v1/employees';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<employee[]> {
    return this.http.get<employee[]>(this.url);
  }

  getEmployee(id: number): Observable<employee> {
    return this.http.get<employee>(this.url + '/' + id);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  updateEmployee(employee: employee): Observable<employee> {
    return this.http.put<employee>(this.url, employee);
    //in api we send the employee whole with no id, and update the employee with the id in the object
  }

  createEmployee(employee: employee): Observable<employee> {
    return this.http.post<employee>(this.url + '/add-employee', employee);
  }

  getEmployeesBySearch(searchQuery: string): Observable<employee[]> {
    return this.http.get<employee[]>(this.url + '/' + searchQuery);
  }
}
