import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Ingredient, Teacher, Utensil} from '../models/app-models';
import {ApiService} from '../service/api.service';
import { Directive } from '@angular/core';
import{ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef} from '@angular/core';


@Component({
  selector: 'app-grocery-dialog-content-dialog',
  templateUrl: './grocery-dialog-content-dialog.component.html',
  styleUrls: ['./grocery-dialog-content-dialog.component.css']
})
export class GroceryDialogContentDialogComponent implements OnInit {
  public ingredientSubscription: Subscription;
  public ingredientsSelected: Ingredient[] = [];
  public allIngredients: Ingredient[] = [];
  public selectedNumber = 0;
  value = '';
  showImage: number;
  isOpen: boolean;
  @ViewChild('itemcontainer', {static: false, read: ViewContainerRef }) entry: ViewContainerRef;
  hideseconddiv: boolean;

  constructor(private service: ApiService, private resolver: ComponentFactoryResolver) {

  }


  ngOnInit() {
    this.ingredientSubscription = this.service.$ingredients.subscribe((ingredients: Ingredient[]) => {
      this.allIngredients = ingredients;
    });
  }

  selectedIngre(ingredient: Ingredient) {
    this.selectedNumber++;
    this.ingredientsSelected.push(ingredient);
    const itemlist = document.getElementById('itemlist');
    // const ing = document.createElement('')
    // itemlist.appendChild(ing);
    this.allIngredients = this.allIngredients.filter(function(value, index, arr) {
      return value != ingredient;
    });
    this.service.setIngredients(this.ingredientsSelected);
  }

  updateNumbers() {
    window.sessionStorage.setItem('ingredientAmount', String(this.selectedNumber));
  }

  deleteSpecificIngredient() {

  }
}
