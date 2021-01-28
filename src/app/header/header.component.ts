
import { Component, Output, EventEmitter,OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl : './header.component.html'

})

export class HeaderComponent implements OnInit,OnDestroy{
 // @Output() selections = new EventEmitter<string>();

  private userSub: Subscription;
  isAuthenticated:boolean =  false;
  collapsed = true;
  constructor(private datastoreser : DataStorageService,private authser:AuthService){}
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  ngOnInit(): void {
    this.userSub = this.authser.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }
  /* onSelect(tag: string) {
     this.selections.emit(tag);*/
  //}
  onSaveData() {
    this.datastoreser.storerecipes();
  }

  fetchdata() {
    this.datastoreser.fetchRecipe().subscribe();
  }

  logout() {
    this.authser.logout();
  }

}