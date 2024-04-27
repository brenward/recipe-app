import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditting = new Subject<number>();
    
    ingredients: Ingredient[] = [
        new Ingredient("pasta",250),
        new Ingredient("tomatoes",4)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      getIngredient(index:number){
        return this.ingredients[index];
      }
    
      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      updateIngredient(index:number, ingredient:Ingredient){
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}