import { Component } from '@angular/core';
import { Recipe } from './recipe/models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "CSW's Recipes";
  search = "SearchBar";
}
