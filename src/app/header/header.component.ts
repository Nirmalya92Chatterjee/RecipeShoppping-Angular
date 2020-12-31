
import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl : './header.component.html'

})

export class HeaderComponent{
 // @Output() selections = new EventEmitter<string>();
  collapsed = true;
  constructor(private datastoreser : DataStorageService){}
  /* onSelect(tag: string) {
     this.selections.emit(tag);*/
  //}
  onSaveData() {
    this.datastoreser.storerecipes();
  }

  fetchdata() {
    this.datastoreser.fetchRecipe().subscribe();
  }

}