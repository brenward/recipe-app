import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetail } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";

const appRoutes: Routes = [
    {path:'', redirectTo: "/recipes", pathMatch:'full'},
    {path:'recipes',component: RecipesComponent, children:[
        {path:'',component: RecipeStartComponent},
        {path:':id',component: RecipeDetail}
    ]},
    {path:'shopping-list',component: ShoppingListComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}