import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomepageComponent } from './core-module/homepage/homepage.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  //{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  //{ path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
