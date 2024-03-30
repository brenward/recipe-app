import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";

@Component({
    selector:"app-recipe-detail",
    templateUrl:"./recipe-detail.component.html"
})
export class RecipeDetail{
    @Input() recipe:Recipe;

    constructor(private shoppingListService:ShoppingListService){}

    onToShoppingList(){
        this.shoppingListService.addIngredients(this.recipe.ingredients);
    }
}