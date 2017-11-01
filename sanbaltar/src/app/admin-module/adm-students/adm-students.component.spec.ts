import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmStudentsComponent } from './adm-students.component';

describe('AdmStudentsComponent', () => {
  let component: AdmStudentsComponent;
  let fixture: ComponentFixture<AdmStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
