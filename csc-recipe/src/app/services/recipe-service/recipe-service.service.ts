import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Recipe } from 'src/app/recipe/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseurl: string = 'http://localhost:8081'
  chosenRecipe: any;

  constructor(private http:HttpClient) { }

  setSelectedRecipe(recipe: Recipe){
    this.chosenRecipe = recipe;
  }

  getSelectedRecipe(): Recipe{
    return this.chosenRecipe;
  }

  getAllRecipes(): Observable<Array<Recipe>> {
    return this.http.get<Array<Recipe>>(this.baseurl + "/recipes" + "/all")
    .pipe(
      retry(1),
      catchError(this.allRecipeErrorHandler)
    )
  }

  allRecipeErrorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  addRecipe(recipe: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(this.baseurl + "/recipes" + "/add", recipe)
    .pipe(
      retry(1),
      catchError(this.allRecipeErrorHandler)
    )
  }

}
