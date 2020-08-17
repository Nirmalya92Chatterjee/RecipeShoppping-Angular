
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl : './header.component.html'

})

export class HeaderComponent{
 // @Output() selections = new EventEmitter<string>();
  collapsed = true;
  constructor(){}
  /* onSelect(tag: string) {
     this.selections.emit(tag);*/
  //}

}