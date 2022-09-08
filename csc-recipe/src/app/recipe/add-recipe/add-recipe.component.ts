import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe-service/recipe-service.service';
import { Recipe } from '../models/recipe.model';
import { Ingrediant } from "../models/ingrediant.model";
import { Instruction } from "../models/instruction.model";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  ingNum: number = 0;
  insNum: number = 0;
  rs: RecipeService;
  recipe!: Recipe;

  constructor(private router: Router, private recipeService: RecipeService) {
    this.rs = recipeService;
   }

  ngOnInit(): void {
  }

  addIngrediant() {
    this.ingNum += 1;
    let row = document.createElement('div');
    row.className = 'Ing';
    row.innerHTML = `<h3>Ingrediant ` + this.ingNum + `</h3><input id="Ingrediant` + this.ingNum + `" style="border: .3rem solid black;-webkit-appearence: none;-ms-appearence: none;-moz-appearance: none;appearance: none;background: white;padding: .5rem 1.5rem;border-radius: 5%/50%;width: 40rem;font-size: large;font-weight: bold;" type="text" placeholder="Enter Ingrediant">`;
    document.querySelector('.Ingrediant')?.appendChild(row);
  }

  addInstruction() {
    this.insNum += 1;
    let row = document.createElement('div');
    row.className = 'Ins';
    row.innerHTML = `<h3>Instruction ` + this.insNum + `</h3><textarea id="Instruction` + this.insNum + `" style="resize: none;border: .3rem solid black;-webkit-appearence: none;-ms-appearence: none;-moz-appearance: none;appearance: none;background: white;padding: .5rem 1.5rem;border-radius: 5%/50%;width: 40rem;height: 20rem;font-size: large;font-weight: bold;" type="text" placeholder="Enter Instruction"></textarea>`;
    document.querySelector('.Instruction')?.appendChild(row);
  }
  
  addRecipe() {
    this.ingNum = 1;
    this.insNum = 1;
    this.recipe = new Recipe(0);
    this.recipe.title = (document.getElementById('Title') as HTMLInputElement).value;
    this.recipe.category = (document.getElementById('Category') as HTMLSelectElement).value
    this.recipe.description = (document.getElementById('Description') as HTMLTextAreaElement).value
    this.recipe.image = (document.getElementById('Image') as HTMLInputElement).value

    while((document.getElementById(`Ingrediant` + this.ingNum +``) as HTMLInputElement) != null){
      this.recipe.ingrediants.push(new Ingrediant);
      this.recipe.ingrediants[this.ingNum-1].ingrediant = (document.getElementById(`Ingrediant` + this.ingNum +``) as HTMLInputElement).value;
      this.ingNum += 1;
    }

    while((document.getElementById(`Instruction` + this.insNum + ``) as HTMLTextAreaElement) != null) {
      this.recipe.instructions.push(new Instruction);
      this.recipe.instructions[this.insNum-1].instruction = (document.getElementById(`Instruction` + this.insNum + ``) as HTMLTextAreaElement).value;
      this.insNum += 1;
    }
    
    this.recipeModelTest();
    
    this.rs.addRecipe(this.recipe).subscribe();
    console.log("recipe added");
    this.router.navigate(['../../messages/recipe-messages']);
  }

  recipeModelTest() {
    console.log(this.recipe.title);
    console.log(this.recipe.category);
    console.log(this.recipe.description);
    console.log(this.recipe.image);
    console.log(this.recipe.favorite);
    console.log(this.recipe.favoriteButtons);
    console.log(this.recipe.id);
    this.recipe.ingrediants.forEach(element => {
      console.log(element.ingrediant);
    });
    this.recipe.instructions.forEach(element => {
      console.log(element.instruction)
    });
  }

}
