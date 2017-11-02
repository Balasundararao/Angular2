import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-example-formfield',
  templateUrl: './example-formfield.component.html',
  styleUrls: ['./example-formfield.component.scss']
})
export class ExampleFormfieldComponent implements OnInit {
  options: FormGroup;
  hide = true;
    constructor(fb: FormBuilder) {
      this.options = fb.group({
        hideRequired: false,
        floatPlaceholder: 'auto',
      });
    }

    email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  ngOnInit() {
  }

}
