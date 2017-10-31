import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomepageComponent } from './core-module/homepage/homepage.component';
import { StudentsModuleComponent } from './students-module/students-module.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'students', component: StudentsModuleComponent },
  // { path: 'students', loadChildren: './students-module/students-module.module#StudentsModule'},
  // { path: 'instructors', loadChildren: './students-module/students-module.module#StudentsModule'},
  // { path: 'administrators', loadChildren: './students-module/students-module.module#StudentsModule'}

];

@NgModule({
  // imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
