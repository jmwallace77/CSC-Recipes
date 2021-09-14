import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent} from './recipe/recipe-list/recipe-list.component';

const routes: Routes = [
  {path:'recipe/recipe-list', component:RecipeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
