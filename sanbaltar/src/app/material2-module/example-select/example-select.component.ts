import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-select',
  templateUrl: './example-select.component.html',
  styleUrls: ['./example-select.component.scss']
})
export class ExampleSelectComponent implements OnInit {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
