import { Component, OnInit, EventEmitter,Output, OnDestroy, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
//import { Subscription } from 'rxjs/Subscription';





@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

 /*@ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;*/

  @ViewChild('f') form: NgForm;

  subscriptionone: Subscription;
 
  @Output() ondeleteclicked = new EventEmitter<void>();
  editMode: boolean = false;
  indexvalue: number;
  ingridient: Ingridient;

  constructor(private shoplistser: ShoppingListService) { }
  ngOnDestroy(): void {
    this.subscriptionone.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptionone = this.shoplistser.onEditClicked.subscribe((data) => {
      this.editMode = true;
      this.indexvalue = data;
      this.ingridient = this.shoplistser.getIndexedItem(this.indexvalue);
      this.form.setValue({
        name: this.ingridient.name,
        amount: this.ingridient.amount
      });
   });

  }

  Addclicked(form:NgForm) {
    const value = form.value;
   /**  */// const amount = this.amountInput.nativeElement.value;
    const ingr = new Ingridient(value.name, value.amount);
    if (this.editMode) {
      this.shoplistser.updateItem(this.indexvalue,ingr);
    }
    else {
      this.shoplistser.addItem(ingr);
    }
    form.reset();
    this.editMode = false;
  }

  Deleteclicked() {
    this.shoplistser.deleteItem(this.indexvalue);
    this.form.reset();
    this.editMode = false;
   
  }

  clear() {
    
    this.form.reset();
    this.editMode = false;
  }

}
