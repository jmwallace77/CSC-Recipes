import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe-service/recipe-service.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipeList: Recipe[] = [new Recipe(0), new Recipe(1), new Recipe(2), new Recipe(3)];
  
  chosenRecipe: any;
  rs: RecipeService;

  constructor(recipeService: RecipeService) {
    this.rs = recipeService;
   }

  ngOnInit(): void {
    //console.log(this.recipeList[0].title);
  }

  favoriting(id: number){
    if(this.recipeList[id].favorite === true){
      (document.getElementById(id.toString()) as HTMLImageElement).src = "../assets/favorite-unchecked.png";
      this.recipeList[id].favorite = false;
    }
    else{
      (document.getElementById(id.toString()) as HTMLImageElement).src = "../assets/favorite-checked.png";
      this.recipeList[id].favorite = true;
    }
    
  }

  recipeSelection(recipe: Recipe){
    this.rs.setSelectedRecipe(recipe);
  }
}
