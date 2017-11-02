import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-example-autocomplete',
  templateUrl: './example-autocomplete.component.html',
  styleUrls: ['./example-autocomplete.component.scss']
})
export class ExampleAutocompleteComponent implements OnInit {
// Example1 :
  myControl1: FormControl = new FormControl();

    options = [
      'One',
      'Two',
      'Three'
     ];

// Example2 :
  myControl2: FormControl = new FormControl();

  filteredOptions: Observable<string[]>;
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl2.valueChanges
         .startWith(null)
         .map(val => val ? this.filter(val) : this.options.slice());
  }
  filter(val: string): string[] {
       return this.options.filter(option =>
         option.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }
}
