import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';
const adminRoutes: Routes = [
  { path: 'administrator', component: AdminModuleComponent },
  // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  // { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
