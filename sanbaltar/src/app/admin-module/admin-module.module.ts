import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule, MatIconModule, MatTableModule} from '@angular/material';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { AdmCoursesComponent } from './adm-courses/adm-courses.component';
import { AdmInstructorsComponent } from './adm-instructors/adm-instructors.component';
import { AdmStudentsComponent } from './adm-students/adm-students.component';

@NgModule({
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  declarations: [AdminModuleComponent, AdmCoursesComponent, AdmInstructorsComponent, AdmStudentsComponent]
})
export class AdminModule { }
