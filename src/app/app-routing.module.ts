import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { CreateemployeeComponent } from './component/createemployee/createemployee.component';
import { SearchemployeesComponent } from './component/searchemployees/searchemployees.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'employees/:id',
    component: EmployeeComponent,
  },
  {
    path: 'add-employee',
    component: CreateemployeeComponent,
  },
  // {
  //   path: ':firstName/:lastName',
  //   component: SearchemployeesComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
