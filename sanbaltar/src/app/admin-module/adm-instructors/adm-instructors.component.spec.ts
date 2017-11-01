import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmInstructorsComponent } from './adm-instructors.component';

describe('AdmInstructorsComponent', () => {
  let component: AdmInstructorsComponent;
  let fixture: ComponentFixture<AdmInstructorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmInstructorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
