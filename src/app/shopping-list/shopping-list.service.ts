import { Injectable, Output, EventEmitter } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { Recipe } from '../recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  onAddclicked = new EventEmitter<Ingridient[]>();

  private ingridients: Ingridient[] = [
    new Ingridient('Apple', 5),
    new Ingridient('Tomatoes', 10)
  ];
  
  getItem() {
    return this.ingridients.slice();
}

  addItem(ing: Ingridient) {
   
    this.ingridients.push(ing);
    this.onAddclicked.emit(this.ingridients.slice());
  }

}
