import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { map,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

constructor(private http:HttpClient, private recipeser:RecipeService) { }

  storerecipes() {
    const recipes = this.recipeser.getRecipe();
    this.http.put('https://recipe-book-9f1b9-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe((recipes) => {
      console.log(recipes);
    }, error => { console.log(error);})
  }

  fetchRecipe() {
     
    return this.http.get<Recipe[]>('https://recipe-book-9f1b9-default-rtdb.firebaseio.com/recipes.json').
      pipe(map(response => {
        return response.map(recipe => {
          return { ...recipe, Ingridients: recipe.Ingridients ? recipe.Ingridients : [] };
        });
      }), tap(response => {
        this.recipeser.setRecipes(response);
      }))
      ;
    
  }

}
