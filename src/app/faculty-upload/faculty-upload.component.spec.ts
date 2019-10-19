import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyUploadComponent } from './faculty-upload.component';

describe('FacultyUploadComponent', () => {
  let component: FacultyUploadComponent;
  let fixture: ComponentFixture<FacultyUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
