import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 recipe: Recipe[] ;

  constructor(private Recipeserv: RecipeService,private router:Router) { }

  ngOnInit(): void {
    this.recipe = this.Recipeserv.getRecipe();
  }

 /* recipeclickedtt(recipedetitemm: Recipe)
  {
       // this.Recipeserv.itemSelected.emit(recipedetitemm);
   
    const idr = this.Recipeserv.getRecipe().indexOf(recipedetitemm);
    this.router.navigate(['/recipe','detail'],  { queryParams: { id: idr } } );
   
  }*/
}
