import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';
import { AdmCoursesComponent } from './adm-courses/adm-courses.component';
import { AdmInstructorsComponent } from './adm-instructors/adm-instructors.component';
import { AdmStudentsComponent } from './adm-students/adm-students.component';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminModuleComponent, children: [
      { path: 'students', component: AdmStudentsComponent },
      { path: 'courses',      component: AdmCoursesComponent },
      { path: 'instructors',   component: AdmInstructorsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
