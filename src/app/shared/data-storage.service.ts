import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn:'root'})
export class DataStorageService implements OnInit{
    private url:string = '';

    constructor(private http:HttpClient, private recipeService:RecipeService, private authService:AuthService){}
    
    ngOnInit(): void {
        
    }

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.url,recipes).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes(){

        return this.http.get<Recipe[]>(this.url).pipe(
            map(recipes =>{
                recipes.map(recipe => {
                    return {...recipe, ingredients: recipe.ingredients?recipe.ingredients:[]}
                })
                return recipes;
            }), 
            tap(recipes =>{
                this.recipeService.setRecipes(recipes);
            }));
    }

}