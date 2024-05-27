import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipeItem } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeDetail } from "./recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesRoutingModule } from "./recipes-routing.module";

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeItem,
        RecipeDetail,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipeListComponent
    ],
    imports:[
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule, 
        RecipesRoutingModule
    ],
    exports:[
        RecipesComponent,
        RecipeItem,
        RecipeDetail,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipeListComponent
    ]
})
export class RecipesModule{

}