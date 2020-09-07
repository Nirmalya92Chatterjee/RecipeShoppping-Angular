import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  public ingridients: Ingridient[];
  onAddClickedSub: Subscription;
  constructor(private shoppinglistservice: ShoppingListService) { }
  
  ngOnDestroy(): void {
    this.onAddClickedSub.unsubscribe();
  }

  ngOnInit(): void {
    this.ingridients = this.shoppinglistservice.getItem();
    this.onAddClickedSub = this.shoppinglistservice.onAddclicked.subscribe((data) => {
      this.ingridients = data;
    });

  }
  onEditItem(count: number) {
    this.shoppinglistservice.onEditClicked.next(count);
  }


}
