import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: 'recipes-list', component: RecipesListComponent },
  { path: 'recipe', component: RecipeComponent }, 
  { path: '',redirectTo: '/recipes-list',pathMatch: 'full'}
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
