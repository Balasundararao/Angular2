import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructorsModuleComponent } from './instructors-module.component';

const insRoutes: Routes = [
  { path: 'instructors', component: InstructorsModuleComponent },
  /**
    children: [
      { path: 'instructors', component: InstructorsModuleComponent }
    ] } */
];


@NgModule({
  imports: [RouterModule.forChild(insRoutes)],
  exports: [RouterModule]
})
export class InstructorsModuleRoutingModule { }
