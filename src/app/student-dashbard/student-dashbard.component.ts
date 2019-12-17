import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Recipe} from '../models/app-models';
import {DialogForCreatingClassComponent} from '../dialog-for-creating-class/dialog-for-creating-class.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {IngredientPopupDialogComponent} from '../ingredient-popup-dialog/ingredient-popup-dialog.component';
import {UtensilsPopupDialogComponent} from '../utensils-popup-dialog/utensils-popup-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-dashbard',
  templateUrl: './student-dashbard.component.html',
  styleUrls: ['./student-dashbard.component.css']
})
export class StudentDashbardComponent implements OnInit {
  private imageSource;
  private recipe: Recipe;
  private stepCount: number = 0;
  public selected: string[] = ['Wash', 'Grate',
    'Grill', 'Melt', 'Pinch', 'Pour',
    'Simmer', 'Slice', 'Spread', 'Stir',
    'Add', 'Bake', 'Blend', 'Broil', 'Chop',
    'Dip', 'Fry'];

  constructor(private dialog: MatDialog, private snackbar: MatSnackBar, private router: Router) {
    if(window.sessionStorage.getItem('student')==null){
      this.router.navigateByUrl('');
    }
    if (window.sessionStorage.getItem('recipeSelected') != null) {
      console.log('in Student local storage');
      this.recipe = JSON.parse(window.sessionStorage.getItem('recipeSelected'));
      this.length = this.recipe.steps.length;
      console.log('Init: length', this.length);
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
      console.log('in Student local storage');
      this.recipe = JSON.parse(window.sessionStorage.getItem('recipeSelected'));

    }
    console.log(this.recipe);

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

  }

  openDialogue(name) {
    if (name == this.recipe.steps[0].ingredient.name) {
      const dialogRef = this.dialog.open(IngredientPopupDialogComponent, {
        width: '700px',
      });
      console.log(name);
      window.sessionStorage.setItem('nameforpopup', name);

      dialogRef.afterClosed().subscribe(result => {
        console.log(this.recipe.steps[this.stepCount],  JSON.parse(window.sessionStorage.getItem('selectedUten')));
        if (this.recipe.steps[this.stepCount].utensil != null && window.sessionStorage.getItem('selectedUten') != null && this.recipe.steps[this.stepCount].utensil.name == JSON.parse(window.sessionStorage.getItem('selectedUten'))) {
          if (this.recipe.steps[this.stepCount].action == window.sessionStorage.getItem('selectedAction')) {
            this.imageSource = this.recipe.steps[this.stepCount].imageFile;
            //this.recipe.steps.splice(0, 1);
            console.log(this.recipe.steps.length, this.length);
            this.percentage += 100 / (this.length);

            this.workspaceItems.push(name);
            for (let i = 0; i < this.recipe.ingredients.length; i++) {
              if (this.recipe.ingredients[i].name == name) {
                this.recipe.ingredients.splice(i, 1);
              }

            }
            window.sessionStorage.removeItem('selectedUten');
            this.stepCount++;
            if (this.recipe.steps.length == this.stepCount) {
              this.snackbar.open( 'You have successfully cooked this recipe, congratulations!', 'OK', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'center', politeness: 'assertive'});

            }

            console.log(this.recipe.steps);
          } else {
            this.snackbar.open( 'Wrong action on the ingredient, Try Again!', 'OK', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'center', politeness: 'assertive'});

            window.sessionStorage.removeItem('selectedUten');
          }
        } else {
          this.snackbar.open( 'Wrong utensil used, Try Again!', 'OK', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'center', politeness: 'assertive'});
          window.sessionStorage.removeItem('selectedUten');
        }
        console.log('The dialog was closed');
      });
    } else {

      this.snackbar.open( 'Wrong ingredient selected, Read the steps carefully!', 'OK', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'center', politeness: 'assertive'});

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

  signOut() {
    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('student');
    this.router.navigateByUrl('');
  }
}
