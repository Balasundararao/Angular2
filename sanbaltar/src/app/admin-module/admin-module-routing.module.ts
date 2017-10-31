import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminModuleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
