import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Recipe} from '../models/app-models';
import {DialogForCreatingClassComponent} from '../dialog-for-creating-class/dialog-for-creating-class.component';
import {MatDialog} from '@angular/material';
import {IngredientPopupDialogComponent} from '../ingredient-popup-dialog/ingredient-popup-dialog.component';
import {UtensilsPopupDialogComponent} from '../utensils-popup-dialog/utensils-popup-dialog.component';

@Component({
  selector: 'app-student-dashbard',
  templateUrl: './student-dashbard.component.html',
  styleUrls: ['./student-dashbard.component.css']
})
export class StudentDashbardComponent implements OnInit {
  private recipe: Recipe;
  public selected: string[] = ['Wash', 'Grate',
    'Grill', 'Melt', 'Pinch', 'Pour',
    'Simmer', 'Slice', 'Spread', 'Stir',
    'Add', 'Bake', 'Blend', 'Broil', 'Chop',
    'Dip', 'Fry'];

  constructor(private dialog: MatDialog) {
    if (window.sessionStorage.getItem('recipeSelected') != null) {
      console.log('in Student local storage');
      this.recipe = JSON.parse(window.sessionStorage.getItem('recipeSelected'));
      this.length = this.recipe.steps.length;
      console.log("Init: length", this.length);
    }
  }
  isOpen: boolean;
  panelOpenState = false;
  length = 0;
  percentage = 0;


  fruits = [
    ''
  ];

  workspaceItems = ['']
  ;

  utensils = [
    ''
  ];

  ngOnInit() {
    if (this.recipe == null && window.sessionStorage.getItem('recipeSelected') != null) {
      console.log("in Student local storage");
      this.recipe = JSON.parse(window.sessionStorage.getItem('recipeSelected'));

    }
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onRightClick($event: MouseEvent) {
    alert('I am here');
  }

  openDialogue(name) {
    if(name == this.recipe.steps[0].ingredient.name) {
      const dialogRef = this.dialog.open(IngredientPopupDialogComponent, {
        width: '700px',
      });
      console.log(name);
      window.sessionStorage.setItem('nameforpopup', name);

      dialogRef.afterClosed().subscribe(result => {
        if(this.recipe.steps[0].action == window.sessionStorage.getItem('selectedAction')) {
          this.recipe.steps.splice(0, 1);
          console.log(this.recipe.steps.length, this.length);
          this.percentage += 100/(this.length);

          this.workspaceItems.push(name);
          for(let i =0; i< this.recipe.ingredients.length ; i++)
          {
            if(this.recipe.ingredients[i].name == name)
            {
              this.recipe.ingredients.splice(i,1);
            }

          }
          if(this.recipe.steps.length == 0) {
            confirm('You have successfully cooked this recipe, congratulations!');
          }

          console.log(this.recipe.steps);
        }
        else {
          confirm('Wrong action on the ingredient, Try Again!');
        }
        console.log('The dialog was closed');
      });
    }
    else{
      confirm('Wrong ingredient selected, Read the steps carefully!');
    }
  }

  openDialogueutensil(name) {
    const dialogRef = this.dialog.open(UtensilsPopupDialogComponent, {
      width: '700px',
    });
    console.log(name);
    window.localStorage.setItem('nameforpopupUtensil', name);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
