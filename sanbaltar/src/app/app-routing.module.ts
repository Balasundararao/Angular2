import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomepageComponent } from './core-module/homepage/homepage.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'home'},
  { path: 'home', component: HomepageComponent }
];

@NgModule({
  // imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
