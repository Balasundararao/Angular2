import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { Material2ModuleRoutingModule } from './material2-module-routing.module';
import { Material2ModuleComponent } from './material2-module.component';
import {   MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule} from '@angular/material';
import { ExampleCardComponent } from './example-card/example-card.component';
import { ExampleAutocompleteComponent } from './example-autocomplete/example-autocomplete.component';
import { ExampleCheckboxComponent } from './example-checkbox/example-checkbox.component';
import { ExampleDatepickerComponent } from './example-datepicker/example-datepicker.component';
import { ExampleFormfieldComponent } from './example-formfield/example-formfield.component';
import { ExampleInputComponent } from './example-input/example-input.component';
import { ExampleRadioComponent } from './example-radio/example-radio.component';
import { ExampleSelectComponent } from './example-select/example-select.component';
@NgModule({
  imports: [
    CommonModule,
    Material2ModuleRoutingModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [Material2ModuleComponent, ExampleCardComponent, ExampleAutocompleteComponent, ExampleCheckboxComponent, ExampleDatepickerComponent, ExampleFormfieldComponent, ExampleInputComponent, ExampleRadioComponent, ExampleSelectComponent]
})
export class Material2Module { }
