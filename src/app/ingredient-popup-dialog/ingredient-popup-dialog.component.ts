import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-popup-dialog',
  templateUrl: './ingredient-popup-dialog.component.html',
  styleUrls: ['./ingredient-popup-dialog.component.css']
})
export class IngredientPopupDialogComponent implements OnInit {
  ingredient: any;

  constructor() { }

  ngOnInit() {
    this.ingredient = window.localStorage.getItem('nameforpopup');
  }

  deleteSpecificIngredient(i: any) {
  }
}
