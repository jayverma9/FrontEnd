import { Component, OnInit } from '@angular/core';
import {Recipe, Utensil} from '../models/app-models';

@Component({
  selector: 'app-ingredient-popup-dialog',
  templateUrl: './ingredient-popup-dialog.component.html',
  styleUrls: ['./ingredient-popup-dialog.component.css']
})
export class IngredientPopupDialogComponent implements OnInit {
  ingredient: any;
  selectedAction: string;
  selectedUtensill: Utensil;
  recipeSelected: Recipe;

  public selected: string[] = ['Wash', 'Grate',
    'Grill', 'Melt', 'Pinch', 'Pour',
    'Simmer', 'Slice', 'Spread', 'Stir',
    'Add', 'Bake', 'Blend', 'Broil', 'Chop',
    'Dip', 'Fry'];
  selectedUtensil: Utensil[];

  constructor() {
    this.recipeSelected = JSON.parse(window.sessionStorage.getItem('recipeSelected'));
    this.selectedUtensil = this.recipeSelected.utensils;
  }

  ngOnInit() {
    this.ingredient = window.sessionStorage.getItem('nameforpopup');
    console.log("Inside ngOninit() in ingredient-popup-dialog-components.ts");
  }

  deleteSpecificIngredient(i: any) {
  }

  setAction() {
    window.sessionStorage.setItem('selectedAction', this.selectedAction);
    if(this.selectedUtensill != null) {
      window.sessionStorage.setItem('selectedUten', JSON.stringify(this.selectedUtensill));
      console.log(this.selectedUtensill);
    }
    console.log("Inside SetAction() in ingredient-popup-dialog-components.ts"+this.selectedAction)
  }

}
