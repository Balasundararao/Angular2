import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsModuleComponent } from './students-module.component';

describe('StudentsModuleComponent', () => {
  let component: StudentsModuleComponent;
  let fixture: ComponentFixture<StudentsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
