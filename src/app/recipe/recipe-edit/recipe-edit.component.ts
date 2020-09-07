import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit,OnDestroy {

  allowEdit: number;
  id: number;
  form: FormGroup;
  subscribevalue : Subscription;

  constructor(private router: ActivatedRoute, private route:Router, private recipeser: RecipeService) { }
  ngOnDestroy(): void {
    this.subscribevalue.unsubscribe();
  }

  ngOnInit(): void {
   this.subscribevalue  = this.router.queryParams.subscribe((params: Params) => {

      this.allowEdit = +params['isAllowEdit'];
      this.id = +params['id'];
      this.initForm();
   });
    
   
  }


  get controls() { // a getter!
    return (<FormArray>this.form.get('Ingridients')).controls;
  }

  onSubmit(){
  
    if (this.allowEdit === 1) { this.recipeser.updateRecipe(this.id, this.form.value);}
    else { this.recipeser.addRecipe(this.form.value); }
    this.route.navigate(['../'],{relativeTo:this.router});
    
  }

  initForm() {
    let recipeName = '';
    let imagePath = '';
    let description = '';
    let Ingridients =  new FormArray([]);

    if (this.allowEdit === 1) {
      let recipe = this.recipeser.getindvRecipe(this.id);
     
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
      if (recipe.Ingridients) {
      
        for (let ingri of recipe.Ingridients) {
          Ingridients.push(new FormGroup({
            'name': new FormControl(ingri.name,Validators.required),
            'amount': new FormControl(ingri.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }
          ))
        }
       
      }
    }

    this.form = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(imagePath,Validators.required),
      'description': new FormControl(description,Validators.required),
      'Ingridients': Ingridients
    })
   

  }

  AddItem() {
    
    (<FormArray>this.form.get('Ingridients')).push(new FormGroup({
      'name': new FormControl('',Validators.required),
      'amount': new FormControl('',[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }
  cancel() {
    this.route.navigate(['../'],{relativeTo:this.router});
  }
  onIngredientdeleted(index: number) {
    (<FormArray>this.form.get('Ingridients')).removeAt(index);
  }

}
