import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

 rec: Recipe;
  id: number;

  constructor(private recser : RecipeService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(
      (queryparm: Params) => {
    
        this.rec = this.recser.getRecipe()[+queryparm['id']];
        this.id = +queryparm['id'];
      }
    )
  }

  onclickaddRecipetoShoppinglist() {
    this.recser.addrecipeitemtoShoppinglist(this.rec.Ingridients);
  }
  deleterec() {
    this.recser.deleterecepie(this.id);
    this.router.navigate(['./recipe']);
  }

}
