import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-radio',
  templateUrl: './example-radio.component.html',
  styleUrls: ['./example-radio.component.scss']
})
export class ExampleRadioComponent implements OnInit {
  favoriteSeason: string;

    seasons = [
      'Winter',
      'Spring',
      'Summer',
      'Autumn',
    ];
  constructor() { }

  ngOnInit() {
  }

}
