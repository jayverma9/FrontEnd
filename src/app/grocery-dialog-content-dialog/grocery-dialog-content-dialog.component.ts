import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Ingredient, Teacher, Utensil} from '../models/app-models';
import {ApiService} from '../service/api.service';
import { Directive } from '@angular/core';
import {ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef} from '@angular/core';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-grocery-dialog-content-dialog',
  templateUrl: './grocery-dialog-content-dialog.component.html',
  styleUrls: ['./grocery-dialog-content-dialog.component.css']
})
export class GroceryDialogContentDialogComponent implements OnInit {
  public ingredientSubscription: Subscription;
  public ingredientsSelected: Ingredient[] = [];
  public copyofingredientsSelected: Ingredient[] = [];
  public allIngredients: Ingredient[] = [];
  public displayingIngredients: Ingredient[] = [];
  public selectedNumber = 0;
  value = '';
  showImage: number;
  isOpen: boolean;
  @ViewChild('itemcontainer', {static: false, read: ViewContainerRef}) entry: ViewContainerRef;
  hideseconddiv: boolean;

  constructor(private service: ApiService, private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.ingredientSubscription = this.service.$ingredients.subscribe((ingredients: Ingredient[]) => {
      this.allIngredients = ingredients;
      this.displayingIngredients = Object.assign(this.displayingIngredients, this.allIngredients);
    });
    if (this.service.getSelectedIngredients() != undefined) {
      this.ingredientsSelected = this.service.getSelectedIngredients();
    }
  }

  selectedIngre(ingredient: Ingredient) {

    this.selectedNumber++;
    this.ingredientsSelected.push(ingredient);
    this.allIngredients = this.allIngredients.filter(function(value, index, arr) {
      return value !== ingredient;
    });

    // for the displaying list to be updated.
    // this.displayingIngredients = Object.assign(this.displayingIngredients, this.allIngredients);

    this.service.setIngredients(this.ingredientsSelected);
    console.log(this.ingredientsSelected);
    // @ts-ignore
    // this.copyofingredientsSelected = this.ingredientsSelected;
  }

  updateNumbers() {
    window.sessionStorage.setItem('ingredientAmount', String(this.selectedNumber));
  }

  deleteSpecificIngredient(i) {
    // const first = document.getElementById('matformfield' + i);
    // const second = document.getElementById('matformfield' + i + i);
     const third = document.getElementById('matformfield' + i + i + i);
    // const fourth = document.getElementById('matformfield' + i + i + i + i);
     const divcontainer = document.getElementById('ingredient' + i );

     for ( let j = 0; j < this.ingredientsSelected.length; j++) {

      if ( this.ingredientsSelected[j].name === third.attributes.getNamedItem('ng-reflect-value').value) {
        this.ingredientsSelected.splice(j, 1);
      }
    }
     console.log(this.ingredientsSelected);

    // first.remove();
    // second.remove();
    // third.remove();
    // fourth.remove();
     divcontainer.remove();
  }

  search(event) {
    let searchText = this.value;
    console.log('serachText = ' + this.value);

    const n = this.allIngredients.length;

    const filter = searchText.toUpperCase();
    console.log(filter);
    // this clears the list
    const l = this.displayingIngredients.length;
    this.displayingIngredients.splice(0, l);

    // this updates the list in real time.
    for (let i = 0; i < this.allIngredients.length; i++) {
      const a = this.allIngredients[i];

      if (a.name.toUpperCase().indexOf(filter) > -1) {
        this.displayingIngredients.push(this.allIngredients[i]);
      }
    }


  }
}
