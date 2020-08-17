import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  allowEdit: number;
  id: number;

  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
   this.router.queryParams.subscribe((params: Params) => {
     
      this.allowEdit = +params['isAllowEdit'];
     this.id = +params['id'];
     //alert(this.allowEdit);
    })
  }

}
