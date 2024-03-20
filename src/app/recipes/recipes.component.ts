import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit{
  selectedRecipe:Recipe;
  recipes = [];

  setSelectedRecipe(recipe:Recipe){
    this.selectedRecipe = recipe;
  }

  constructor(){};
  
  ngOnInit(): void {
    
  }
}
