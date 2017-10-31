import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorsModuleRoutingModule } from './instructors-module-routing.module';
import { InstructorsModuleComponent } from './instructors-module.component';

@NgModule({
  imports: [
    CommonModule,
    InstructorsModuleRoutingModule
  ],
  declarations: [InstructorsModuleComponent]
})
export class InstructorsModule { }
