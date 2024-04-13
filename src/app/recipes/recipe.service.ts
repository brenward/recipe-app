import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    constructor(private shoppingListService:ShoppingListService){};

    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe',
           'Simply a test',
           'https://publicdomainrecipes.org/recipes/potato-biscuit-ii/Potato%20Biscuit_hub9ecb69038ff94a4507503835feb7d09_80236_350x350_fill_q75_box_smart1.jpg',
           [new Ingredient('meat', 1), new Ingredient('French Fries',20)]),
        new Recipe(
        'A 2nd Test Recipe',
         'Simply a 2nd test',
         'https://publicdomainrecipes.org/recipes/potato-biscuit-ii/Potato%20Biscuit_hub9ecb69038ff94a4507503835feb7d09_80236_350x350_fill_q75_box_smart1.jpg',
         [new Ingredient('soup',10), new Ingredient('bread', 2)])
      ];

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }
}