import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRadioComponent } from './example-radio.component';

describe('ExampleRadioComponent', () => {
  let component: ExampleRadioComponent;
  let fixture: ComponentFixture<ExampleRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
