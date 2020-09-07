import { Injectable, Output, EventEmitter } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { Recipe } from '../recipe/recipe.model';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  //onAddclicked = new EventEmitter<Ingridient[]>();
  onAddclicked = new Subject<Ingridient[]>();
  onEditClicked = new Subject<number>();

  private ingridients: Ingridient[] = [
    new Ingridient('Apple', 5),
    new Ingridient('Tomatoes', 10)
  ];
  
  getItem() {
    return this.ingridients.slice();
  }
  
  getIndexedItem(index: number) {
    return this.ingridients[index];
    
  }

  addItem(ing: Ingridient) {
   
    this.ingridients.push(ing);
    this.onAddclicked.next(this.ingridients.slice());
  }

  updateItem(index: number, ingridient: Ingridient) {
   
    this.ingridients[index] = ingridient;
    this.onAddclicked.next(this.ingridients.slice());
  }

  deleteItem(index: number) {
    this.ingridients.splice(index, 1);
    this.onAddclicked.next(this.ingridients.slice());
  }

}
