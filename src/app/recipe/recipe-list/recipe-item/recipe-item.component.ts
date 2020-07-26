import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeindvitem: any;

  constructor() { }
  //@Output() recipedetclicked = new EventEmitter<{ name: string, desc: string, imgpath: string }>();
  @Output() recipedetclicked = new EventEmitter<void>();
  ngOnInit(): void {
  }
  recipeclicked()
  {
   // this.recipedetclicked.emit({ name : recipedetitemm.name , desc : recipedetitemm.description , imgpath : recipedetitemm.imagePath });
   this.recipedetclicked.emit();
  }
}
