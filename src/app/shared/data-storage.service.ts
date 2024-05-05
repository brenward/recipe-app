import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map } from "rxjs/operators";

@Injectable({providedIn:'root'})
export class DataStorageService implements OnInit{
    private url:string = 'https://ng-recipe-book-de139.firebaseio.com/recipes.json';

    constructor(private http:HttpClient, private recipeService:RecipeService){}
    
    ngOnInit(): void {
        
    }

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.url,recipes).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes(){
        this.http.get<Recipe[]>(this.url)
        .pipe(map(recipes =>{
            recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients?recipe.ingredients:[]}
            })
            return recipes;
        }))
        .subscribe(recipes => {
            this.recipeService.setRecipes(recipes);
        });
    }

}