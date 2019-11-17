import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Ingredient, Teacher, Utensil} from '../models/app-models';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-grocery-dialog-content-dialog',
  templateUrl: './grocery-dialog-content-dialog.component.html',
  styleUrls: ['./grocery-dialog-content-dialog.component.css']
})
export class GroceryDialogContentDialogComponent implements OnInit {
  private ingredientSubscription: Subscription;
  private ingredientsSelected: Ingredient[] = [];
  private allIngredients: Ingredient[] = [];

  constructor(private service: ApiService) {

  }

  ngOnInit() {
    this.ingredientSubscription = this.service.$ingredients.subscribe((ingredients : Ingredient[]) => {
      this.allIngredients = ingredients;
    });
  }

  selectedIngre(ingredient: Ingredient) {
    this.ingredientsSelected.push(ingredient);
    this.allIngredients = this.allIngredients.filter(function(value, index, arr){
      return value != ingredient;
    });
    this.service.setIngredients(this.ingredientsSelected);
  }

}
