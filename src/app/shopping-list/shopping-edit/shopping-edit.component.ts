import { Component, OnInit,ViewChild, ElementRef, EventEmitter,Output } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';




@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;
 
  @Output() ondeleteclicked = new EventEmitter<void>();

  constructor(private shoplistser: ShoppingListService) { }

  ngOnInit(): void {
  }

  Addclicked() {
    const value = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const ingr = new Ingridient(value, amount);
    this.shoplistser.addItem(ingr);
  }

  Deleteclicked() {
    this.ondeleteclicked.emit();
  }

}
