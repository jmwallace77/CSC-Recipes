import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { RecipeDisplayComponent } from './recipe/recipe-display/recipe-display.component';
import { RecipeListComponent} from './recipe/recipe-list/recipe-list.component';
import { RemoveRecipeComponent } from './recipe/remove-recipe/remove-recipe.component';

const routes: Routes = [
  {path:'recipe/recipe-list', component:RecipeListComponent },
  {path:'recipe/add-recipe', component:AddRecipeComponent },
  {path:'recipe/remove-recipe', component:RemoveRecipeComponent },
  {path:'recipe/recipe-display', component:RecipeDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
