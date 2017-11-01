import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorsModuleRoutingModule } from './instructors-module-routing.module';
import { InstructorsModuleComponent } from './instructors-module.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    InstructorsModuleRoutingModule,
    FlexLayoutModule
  ],
  declarations: [InstructorsModuleComponent]
})
export class InstructorsModule { }
