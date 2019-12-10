import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-popup-dialog',
  templateUrl: './ingredient-popup-dialog.component.html',
  styleUrls: ['./ingredient-popup-dialog.component.css']
})
export class IngredientPopupDialogComponent implements OnInit {
  ingredient: any;
  selectedAction: string;
  public selected: string[] = ['Wash', 'Grate',
    'Grill', 'Melt', 'Pinch', 'Pour',
    'Simmer', 'Slice', 'Spread', 'Stir',
    'Add', 'Bake', 'Blend', 'Broil', 'Chop',
    'Dip', 'Fry'];

  constructor() { }

  ngOnInit() {
    this.ingredient = window.sessionStorage.getItem('nameforpopup');
  }

  deleteSpecificIngredient(i: any) {
  }

  setAction() {
    window.sessionStorage.setItem('selectedAction', this.selectedAction);
    console.log(this.selectedAction)

  }
}
