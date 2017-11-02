import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-datepicker',
  templateUrl: './example-datepicker.component.html',
  styleUrls: ['./example-datepicker.component.scss']
})
export class ExampleDatepickerComponent implements OnInit {
  myFilter = (d: Date): boolean => {
      const day = d.getDay();
      // Prevent Saturday and Sunday from being selected.
      return day !== 0 && day !== 6;
    }
  constructor() { }

  ngOnInit() {
  }

}
