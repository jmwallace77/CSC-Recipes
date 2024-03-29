import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe-service/recipe-service.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.css']
})
export class RecipeDisplayComponent implements OnInit {

  chosenRecipe: Recipe;

  constructor(recipeService: RecipeService) { 
    this.chosenRecipe = recipeService.getSelectedRecipe();
    this.chosenRecipe.ingrediants.forEach(element => {
      console.log(element.ingrediant);
    });
  }

  ngOnInit(): void {
    
  }

}
