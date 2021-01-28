import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RecipeShopping';
  selectedfrom = '';

 /* onSelect(data: string)
  {
   
    this.selectedfrom = data;
  }*/

  constructor(private authser:AuthService){}



  ngOnInit() {
    this.authser.autoLogin();
  }
}
