import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchemployeesComponent } from './searchemployees.component';

describe('SearchemployeesComponent', () => {
  let component: SearchemployeesComponent;
  let fixture: ComponentFixture<SearchemployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchemployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
