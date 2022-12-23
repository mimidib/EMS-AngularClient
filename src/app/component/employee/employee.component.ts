import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
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

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id']; // assign id as the one that is returned
    });

    this.service.getEmployee(this.id).subscribe((res) => {
      this.employee = res;
    });
  }

  deleteEmployee() {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.service.deleteEmployee(this.id).subscribe((res) => {
        this.rt.navigate(['/employees']);
      });
    }
    // this.service.deleteEmployee(this.id).subscribe((res) => {
    //   alert('Successfully Deleted Employee.');
    //   this.rt.navigate(['/employees']);
    // });
  }

  updateEmployee(
    firstName: string,
    lastName: string,
    salary: string,
    state: string,
    country: string
  ) {
    this.employee.id = this.id; //assign id as the one retrieved in onInit
    this.employee.firstName = firstName;
    this.employee.lastName = lastName;
    this.employee.salary = Number(salary);
    this.employee.state = state;
    this.employee.country = country;

    console.log('this.employee: ' + this.employee.salary);
    this.service.updateEmployee(this.employee).subscribe((res) => {
      alert('Successfully Updated Employee.');
      this.rt.navigate(['/employees']); // go to that employee specific details page
    });
  }
}
