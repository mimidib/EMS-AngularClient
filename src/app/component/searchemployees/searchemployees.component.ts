import { Component } from '@angular/core';
import { employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-searchemployees',
  templateUrl: './searchemployees.component.html',
  styleUrls: ['./searchemployees.component.css'],
})
export class SearchemployeesComponent {
  searchQuery: string = '';
  employees: employee[] = [];

  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.service.getEmployeesBySearch(this.searchQuery).subscribe((res) => {
      this.employees = res;
    });
  }
}
