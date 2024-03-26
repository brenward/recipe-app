import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Simply a test', 'https://publicdomainrecipes.org/recipes/potato-biscuit-ii/Potato%20Biscuit_hub9ecb69038ff94a4507503835feb7d09_80236_350x350_fill_q75_box_smart1.jpg'),
        new Recipe('A 2nd Test Recipe', 'Simply a 2nd test', 'https://publicdomainrecipes.org/recipes/potato-biscuit-ii/Potato%20Biscuit_hub9ecb69038ff94a4507503835feb7d09_80236_350x350_fill_q75_box_smart1.jpg')
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}