import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCreateTestComponent } from './faculty-create-test.component';

describe('FacultyCreateTestComponent', () => {
  let component: FacultyCreateTestComponent;
  let fixture: ComponentFixture<FacultyCreateTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyCreateTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCreateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
