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
  public ingredientSubscription: Subscription;
  public ingredientsSelected: Ingredient[] = [];
  public allIngredients: Ingredient[] = [];
  public selectedNumber = 0;
  value = '';
  showImage: number;
  isOpen: boolean;

  constructor(private service: ApiService) {

  }


  ngOnInit() {
    this.ingredientSubscription = this.service.$ingredients.subscribe((ingredients: Ingredient[]) => {
      this.allIngredients = ingredients;
    });
  }

  selectedIngre(ingredient: Ingredient) {
    this.selectedNumber++;
    this.ingredientsSelected.push(ingredient);

    // let cloned = document.querySelector("#item1").cloneNode(true);
    // console.log("3",cloned)
    // const itemList = document.getElementById('itemlist');
    // console.log(cloned);
    // itemList.appendChild(cloned);
    //this.addInrightList(ingredient.name);

    this.allIngredients = this.allIngredients.filter(function(value, index, arr) {
      return value != ingredient;
    });
    this.service.setIngredients(this.ingredientsSelected);
  }

  // addInrightList(name){
  // //      <div id="item1" class=" flex flex-row m-2 items-end justify-end hover:cursor-pointer transition-all transition-ease-out animated fadeIn">
  //   //         <mat-form-field class="w-1/5 h-10 ">
  //   //           <input type ="number" matInput placeholder="Quantity" >
  //   //         </mat-form-field>
  //   //
  //   //         <mat-form-field class="w-1/5 mx-2 h-10">
  //   //           <mat-label>Type</mat-label>
  //   //           <mat-select #fontSize value="8px">
  //   //             <mat-option value="Cup">Cup</mat-option>
  //   //             <mat-option value="Dashes">Dashes</mat-option>
  //   //             <mat-option value="Pinches">Pinches</mat-option>
  //   //             <mat-option value="Tablespoon">Tablespoon</mat-option>
  //   //             <mat-option value="Teaspoon">Teaspoon</mat-option>
  //   //             <mat-option value="Pounds">Pounds</mat-option>
  //   //             <mat-option value="Kilogram">Kilogram</mat-option>
  //   //             <mat-option value="Cups">Cups</mat-option>
  //   //             <mat-option value="Drops">Drops</mat-option>
  //   //             <mat-option value="Gallon">Gallon</mat-option>
  //   //             <mat-option value="Ounces">Ounces</mat-option>
  //   //             <mat-option value="Pints">Pints</mat-option>
  //   //             <mat-option value="Quarts">Quarts</mat-option>
  //   //           </mat-select>
  //   //         </mat-form-field>
  //
  //   //         <mat-form-field class="w-3/5 mr-2 h-10">
  //   //           <input type ="text" matInput placeholder="Ingredient" >
  //   //         </mat-form-field>
  //   //       <mat-icon >delete</mat-icon>
  //   //     </div>
  //
  //   const nextIngredient = document.createElement('div');
  //   nextIngredient.id = 'item'+ this.selectedNumber;
  //   nextIngredient.className = 'flex flex-row m-2 items-end justify-end hover:cursor-pointer transition-all transition-ease-out animated fadeIn';
  //
  //   const matformfield_1 = document.createElement('mat-form-field');
  //   matformfield_1.className = 'w-1/5 h-10 mat-form-field ng-tns-c5-2 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder';
  //   const input = document.createElement('input');
  //   input.type ='number';
  //   input.placeholder ='Quantity';
  //
  //   matformfield_1.appendChild(input);
  //
  //   const matformfield_2 = document.createElement('mat-form-field');
  //   matformfield_2.className = 'w-1/5 mx-2 h-10 mat-form-field ng-tns-c5-3 mat-primary mat-form-field-type-mat-select mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder'
  //   const matlabel = document.createElement('mat-label');
  //   matlabel.textContent = 'Type'
  //
  //   const matselect = document.createElement('mat-select');
  //
  //   const matoption_1 = document.createElement('mat-option');
  //   matoption_1.nodeValue = 'Cups';
  //   matoption_1.textContent = 'Cups';
  //
  //  console.log( "eee", matoption_1.nodeValue);
  //   const matoption_2 = document.createElement('mat-option');
  //   matoption_2.nodeValue = 'Dashes';
  //   matoption_2.textContent = 'Dashes';
  //   const matoption_3 = document.createElement('mat-option');
  //   matoption_3.nodeValue = 'Pinches';
  //   matoption_3.textContent = 'Pinches';
  //   const matoption_4 = document.createElement('mat-option');
  //   matoption_4.nodeValue = 'Tablespoon';
  //   matoption_4.textContent = 'Tablespoon';
  //   const matoption_5 = document.createElement('mat-option');
  //   matoption_5.nodeValue = 'Teaspoon';
  //   matoption_5.textContent = 'Teaspoon';
  //   const matoption_6 = document.createElement('mat-option');
  //   matoption_6.nodeValue = 'Kilogram';
  //   matoption_6.textContent = 'Kilogram';
  //   const matoption_7 = document.createElement('mat-option');
  //   matoption_7.nodeValue = 'Drops';
  //   matoption_7.textContent = 'Drops';
  //   const matoption_8 = document.createElement('mat-option');
  //   matoption_8.nodeValue = 'Gallon';
  //   matoption_8.textContent = 'Gallon';
  //   const matoption_9 = document.createElement('mat-option');
  //   matoption_9.nodeValue = 'Ounces';
  //   matoption_9.textContent = 'Ounces';
  //   const matoption_10 = document.createElement('mat-option');
  //   matoption_10.nodeValue = 'Pints';
  //   matoption_10.textContent = 'Pints';
  //   const matoption_11 = document.createElement('mat-option');
  //   matoption_11.nodeValue = 'Quarts';
  //   matoption_11.textContent = 'Quarts';
  //   const matoption_12 = document.createElement('mat-option');
  //   matoption_12.nodeValue = 'Cup';
  //   matoption_12.textContent = 'Cup';
  //   const matoption_13 = document.createElement('mat-option');
  //   matoption_13.nodeValue = 'Cup';
  //   matoption_13.textContent = 'Cup';
  //   matselect.appendChild(matoption_1);
  //   matselect.appendChild(matoption_2);
  //   matselect.appendChild(matoption_3);
  //   matselect.appendChild(matoption_4);
  //   matselect.appendChild(matoption_5);
  //   matselect.appendChild(matoption_6);
  //   matselect.appendChild(matoption_7);
  //   matselect.appendChild(matoption_8);
  //   matselect.appendChild(matoption_9);
  //   matselect.appendChild(matoption_10);
  //   matselect.appendChild(matoption_11);
  //   matselect.appendChild(matoption_12);
  //   matselect.appendChild(matoption_13);
  //
  //   matformfield_2.appendChild(matselect);
  //   matformfield_2.appendChild(matlabel);
  //
  //   const matformfield_3 = document.createElement('mat-form-field');
  //   matformfield_2.className = 'w-3/5 mr-2 h-10 mat-form-field ng-tns-c5-5 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder'
  //   const input_1 = document.createElement('input');
  //   input_1.type ='text';
  //   input_1.placeholder ='Ingredient';
  //   input_1.inputMode ='matInput';
  //
  //   input_1.innerText = name;
  //   input_1.textContent = name;
  //
  //   matformfield_3.appendChild(input_1);
  //
  //   const delIcon = document.createElement('mat-icon');
  //   delIcon.textContent ='delete';
  //
  //   nextIngredient.appendChild(matformfield_1);
  //   nextIngredient.appendChild(matformfield_2);
  //   nextIngredient.appendChild(matformfield_3);
  //   nextIngredient.appendChild(delIcon);
  //
  //   const itemList = document.getElementById('itemlist');
  //   itemList.appendChild(nextIngredient);
  //
  // }

  updateNumbers() {
    window.sessionStorage.setItem('ingredientAmount', String(this.selectedNumber));
  }
}
