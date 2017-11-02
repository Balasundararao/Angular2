import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDatepickerComponent } from './example-datepicker.component';

describe('ExampleDatepickerComponent', () => {
  let component: ExampleDatepickerComponent;
  let fixture: ComponentFixture<ExampleDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
