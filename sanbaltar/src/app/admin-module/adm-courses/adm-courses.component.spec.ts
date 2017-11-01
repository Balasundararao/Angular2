import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCoursesComponent } from './adm-courses.component';

describe('AdmCoursesComponent', () => {
  let component: AdmCoursesComponent;
  let fixture: ComponentFixture<AdmCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
