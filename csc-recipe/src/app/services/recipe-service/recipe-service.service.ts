import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/recipe/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  chosenRecipe: any;

  constructor() { }

  setSelectedRecipe(recipe: Recipe){
    this.chosenRecipe = recipe;
  }

  getSelectedRecipe(): Recipe{
    return this.chosenRecipe;
  }
}
