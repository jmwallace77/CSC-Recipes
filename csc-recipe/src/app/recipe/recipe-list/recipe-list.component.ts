import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipeList: Recipe[] = [new Recipe(0), new Recipe(1), new Recipe(2), new Recipe(3)];

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.recipeList[0].title);
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

  unfavoriting(){
    (document.getElementById("favoriteIcon") as HTMLImageElement).src = "../assets/favorite-unchecked.png";
  }

}
