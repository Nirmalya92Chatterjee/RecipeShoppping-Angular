import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipedetclickedtt = new EventEmitter<{ name: string, desc: string, imgpath: string }>();

  recipe: Recipe[] = [new Recipe('A test recipe', 'This is a simple test',
    'https://p0.pikrepo.com/preview/101/421/grilled-pork-belly-with-green-salad-thumbnail.jpg'),
    new Recipe('A new recipe', 'This is a spicy test',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuayUnpZJRnJL7P6wX4qeoxRFwq6bWga06BOcPzhjxk_TeLTo&s')];

  constructor() { }

  ngOnInit(): void {
  }

  recipeclickedtt(recipedetitemm: Recipe)
  {
    this.recipedetclickedtt.emit({ name : recipedetitemm.name , desc : recipedetitemm.description , imgpath : recipedetitemm.imagePath });
  }
}
