import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css'],
})
export class CreateemployeeComponent {
  id: number = 0;
  employee: employee = {
    id: 0,
    firstName: '',
    lastName: '',
    salary: 0,
    state: '',
    country: '',
  };

  constructor(
    private route: ActivatedRoute,
    private service: EmployeeService,
    private rt: Router
  ) {}

  ngOnInit() {}

  createEmployee(
    firstName: string,
    lastName: string,
    salary: number,
    state: string,
    country: string
  ) {
    let employee: employee = {
      id: 0,
      firstName: firstName,
      lastName: lastName,
      state: state,
      salary: salary,
      country: country,
    };
    this.service.createEmployee(employee).subscribe((res) => {
      alert('Successfully Added Employee');
      this.rt.navigate(['/employees']);
      //navigate to created employee with id;
    });
  }
}
