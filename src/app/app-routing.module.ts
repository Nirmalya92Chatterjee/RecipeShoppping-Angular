import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipestartcomponentComponent } from './recipe/recipestartcomponent/recipestartcomponent.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipe/recipe-resolver.service';

const appRoutes : Routes = [
  {
    path: 'recipe', component: RecipeComponent, children: [
    {path:'',component:RecipestartcomponentComponent},
    { path: 'detail', component: RecipeDetailComponent },
    { path: 'new',component : RecipeEditComponent},
    { path: 'edit', component : RecipeEditComponent}
  ],resolve:[RecipeResolverService]},
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

  
}