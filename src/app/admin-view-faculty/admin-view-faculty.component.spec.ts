import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewFacultyComponent } from './admin-view-faculty.component';

describe('AdminViewFacultyComponent', () => {
  let component: AdminViewFacultyComponent;
  let fixture: ComponentFixture<AdminViewFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
