import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewFinalComponent } from './student-view-final.component';

describe('StudentViewFinalComponent', () => {
  let component: StudentViewFinalComponent;
  let fixture: ComponentFixture<StudentViewFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentViewFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
