import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeNavbarComponent } from './navigation/recipe-navbar/recipe-navbar.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeNavbarComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
