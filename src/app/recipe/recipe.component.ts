import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  RecipeDetail: { name: string, description: string, image: string } = { name : '', description : '' ,image : ''};

  ngOnInit() {
  }
  recclick(data)
  {
    console.log(data);
    this.RecipeDetail.name = data.name;
    this.RecipeDetail.description = data.desc;
    this.RecipeDetail.image = data.imgpath;
    console.log(this.RecipeDetail);
  }
}
