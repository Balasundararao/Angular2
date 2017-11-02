import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Material2ModuleComponent } from './material2-module.component';
import { ExampleCardComponent } from './example-card/example-card.component';
import { ExampleAutocompleteComponent} from './example-autocomplete/example-autocomplete.component';
import { ExampleCheckboxComponent } from './example-checkbox/example-checkbox.component';
import { ExampleDatepickerComponent } from './example-datepicker/example-datepicker.component';
import { ExampleFormfieldComponent } from './example-formfield/example-formfield.component';

const mtRoutes: Routes = [
  { path: 'mat', component: Material2ModuleComponent,
   children: [
      { path: 'card',  component: ExampleCardComponent },
      { path: 'autocomplete',   component: ExampleAutocompleteComponent },
      { path: 'checkbox',   component: ExampleCheckboxComponent },
      { path: 'datepicker',   component: ExampleDatepickerComponent },
      { path: 'formfield',   component: ExampleFormfieldComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mtRoutes)],
  exports: [RouterModule]
})
export class Material2ModuleRoutingModule { }
