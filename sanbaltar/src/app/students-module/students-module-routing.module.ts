import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsModuleComponent } from './students-module.component';

const stuRoutes: Routes = [
  { path: 'students', component: StudentsModuleComponent}
  /**
    children: [
      { path: 'students', component: StudentsModuleComponent }
    ] } **/
];

@NgModule({
  imports: [RouterModule.forChild(stuRoutes)],
  exports: [RouterModule]
})
export class StudentsModuleRoutingModule { }
