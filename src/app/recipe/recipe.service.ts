import { Injectable, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

constructor(private shoppinglistsr : ShoppingListService) { }

  @Output() itemSelected = new EventEmitter<Recipe>();
  onAddedRecipe = new Subject<Recipe[]>();
  
  /*private recipe: Recipe[] = [new Recipe('Tasty Schnitzel',
    'A Super Tasty Schnitzel-Just awesome!!',
    'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    [new Ingridient('Meat', 1),
    new Ingridient('French Fries',20)]
  ),
    new Recipe('A Big Fat Burger',
      'What else you need to say!',
'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  [new Ingridient('Bun', 1),
    new Ingridient('Meat',2)])];*/

  private recipe: Recipe[] = [];

  getRecipe() {
    return this.recipe.slice();
  }

  getindvRecipe(index: number) {
   
    return this.recipe[index];  
  }

  setRecipes(recipes: Recipe[]) {
    this.recipe = recipes;
    this.onAddedRecipe.next(this.recipe.slice());
  }

  addrecipeitemtoShoppinglist(ingridients : Ingridient[]) {
    ingridients.map((el) => {
     
      this.shoppinglistsr.addItem(el);
    });
   
  }
  addRecipe(recipe: Recipe) {
  
    this.recipe.push(recipe);
    this.onAddedRecipe.next(this.recipe.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
 
    this.recipe[index] = recipe;
   
    this.onAddedRecipe.next(this.recipe.slice());
  }

  deleterecepie(index:number){
    this.recipe.splice(index, 1);
    this.onAddedRecipe.next(this.recipe.slice());
  }

}
