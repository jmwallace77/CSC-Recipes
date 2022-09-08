import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe-service/recipe-service.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipeList: Array<Recipe>;
  
  chosenRecipe: any;
  rs: RecipeService;

  constructor(recipeService: RecipeService) {
    this.rs = recipeService;
    this.recipeList = this.getAllRecipes();
   }

  ngOnInit(): void {
    
  }

  getAllRecipes() {
    this.rs.getAllRecipes().subscribe(recipe => {
      this.recipeList = recipe;
      this.recipeList.forEach(element => {
        console.log(element.title);
        console.log(element.id);
        console.log(element.favorite);
      });
    });
    return this.recipeList;
  }

  favoriting(id: number){
    id = id-1;
    const documentId = id + 1;
    // console.log(id);
    // console.log(this.recipeList[id-1].title);
    // console.log(this.recipeList[id-1].favorite);
    //console.log((document.getElementById(id.toString()) as HTMLImageElement).src);
    if(this.recipeList[id].favorite === true){
      (document.getElementById(documentId.toString()) as HTMLImageElement).src = "../assets/favorite-unchecked.png";
      this.recipeList[id].favorite = false;
      this.recipeList[id].favoriteButtons = "../assets/favorite-unchecked.png";
    }
    else{
      (document.getElementById(documentId.toString()) as HTMLImageElement).src = "../assets/favorite-checked.png";
      this.recipeList[id].favorite = true;
      this.recipeList[id].favoriteButtons = "../assets/favorite-checked.png";
    }
    
  }

  recipeSelection(recipe: Recipe){
    this.rs.setSelectedRecipe(recipe);
  }
}
