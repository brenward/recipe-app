import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({providedIn:'root'})
export class DataStorageService implements OnInit{
    private url:string = '';

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
        this.http.get<Recipe[]>(this.url).subscribe(response => {
            this.recipeService.setRecipes(response);
        });
    }

}