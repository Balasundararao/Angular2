import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsModuleRoutingModule } from './students-module-routing.module';
import { StudentsModuleComponent } from './students-module.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsModuleRoutingModule
  ],
  declarations: [StudentsModuleComponent]
})
export class StudentsModule { }
