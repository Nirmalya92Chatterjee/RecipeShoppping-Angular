import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
 
})
export class RecipeComponent implements OnInit {

  constructor(private recser : RecipeService) { }

  RecipeDetail: Recipe;

  ngOnInit() {
    this.recser.itemSelected.subscribe((data:Recipe) => {
      this.RecipeDetail = data;
    
   })
  }

}
