import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsModuleComponent } from './instructors-module.component';

describe('InstructorsModuleComponent', () => {
  let component: InstructorsModuleComponent;
  let fixture: ComponentFixture<InstructorsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
