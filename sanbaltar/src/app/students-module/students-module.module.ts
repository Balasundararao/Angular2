import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsModuleRoutingModule } from './students-module-routing.module';
import { StudentsModuleComponent } from './students-module.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    StudentsModuleRoutingModule    
  ],
  declarations: [StudentsModuleComponent]
})
export class StudentsModule { }
