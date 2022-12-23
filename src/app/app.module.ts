import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //for forms <- DON'T FORGET THIS

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { CreateemployeeComponent } from './component/createemployee/createemployee.component';
import { SearchemployeesComponent } from './component/searchemployees/searchemployees.component'; //manual import

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, EmployeesComponent, EmployeeComponent, CreateemployeeComponent, SearchemployeesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
