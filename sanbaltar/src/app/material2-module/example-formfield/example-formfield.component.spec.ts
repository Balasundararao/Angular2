import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFormfieldComponent } from './example-formfield.component';

describe('ExampleFormfieldComponent', () => {
  let component: ExampleFormfieldComponent;
  let fixture: ComponentFixture<ExampleFormfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleFormfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFormfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
