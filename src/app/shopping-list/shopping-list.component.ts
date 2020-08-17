import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit {

  public ingridients: Ingridient[];
  constructor(private shoppinglistservice : ShoppingListService) { }

  ngOnInit(): void {
    this.ingridients = this.shoppinglistservice.getItem();
    this.shoppinglistservice.onAddclicked.subscribe((data) => {
      this.ingridients = data;
    })
  }



}
