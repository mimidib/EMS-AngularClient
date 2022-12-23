import { Component } from '@angular/core';
import { employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  employees: employee[] = [];

  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.service.getEmployees().subscribe((res) => {
      this.employees = res;
    });
  }
}
