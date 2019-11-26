import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {MatDialog} from '@angular/material/dialog';
import {GroceryDialogContentDialogComponent} from '../grocery-dialog-content-dialog/grocery-dialog-content-dialog.component';
import {DialogForCreatingClassComponent} from '../dialog-for-creating-class/dialog-for-creating-class.component';
import {UtensilDialogContentDialogComponent} from '../utensil-dialog-content-dialog/utensil-dialog-content-dialog.component';
import {Class, Recipe, Teacher} from '../models/app-models';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

// import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-instructor-new-recipe',
  templateUrl: './instructor-new-recipe.component.html',
  styleUrls: ['./instructor-new-recipe.component.css']
})

export class InstructorNewRecipeComponent implements OnInit {

  isOpen: boolean;

  @Input() teacher: Teacher;
  public selectedRecipe: Recipe;
  public teacherSubscription: Subscription;
  public texts: string[] = [];

  private stepNum: number;

  constructor(private service: ApiService, public dialog: MatDialog, private router: Router) {
    this.teacherSubscription = this.service.$teacher.subscribe((teacher: Teacher) => {
      this.teacher = teacher;
    });

    if (this.teacher == null && window.localStorage.getItem('user') != null) {
      console.log("in Teacher local storage");
      this.teacher = JSON.parse(window.localStorage.getItem('user'));
    }

    if (this.selectedRecipe == null && window.sessionStorage.getItem('selectedRecipe') != null) {
      this.selectedRecipe = JSON.parse(window.sessionStorage.getItem('selectedRecipe'));
      console.log(window.sessionStorage.getItem('selectedRecipe'));
      console.log("selected Recipe", this.selectedRecipe);
    }

    this.texts[0] = "Name of Dish";
    this.texts[1] = "Description";
    this.texts[2] = "Cooking Time (minutes)";
    this.texts[3] = "Image";
    this.texts[4] = "What type of dish is it?";

    if (this.selectedRecipe == null) {
      this.texts[5] = "";
      this.texts[6] = "";
      this.texts[7] = "";
      this.texts[8] = "";
      this.texts[9] = "";
    } else {
      this.texts[5] = this.selectedRecipe.name;
      this.texts[6] = this.selectedRecipe.description;
      this.texts[7] = "45";
      this.texts[8] = "Path not yet defined";
      this.texts[9] = "Main Course";

      for (let i = 0; i < this.selectedRecipe.steps.length; i++) {
        if(i!=0)
          this.addStep();
        let s = this.selectedRecipe.steps[i];
        console.log(this.selectedRecipe.steps[i]);
        let loadsteps = document.getElementById('steps0');
        console.log(loadsteps);
      }
    }

  }

  ngOnInit() {
    this.stepNum = 0;
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }


  addStep() {

    // tslint:disable-next-line:max-line-length
    this.stepNum += 1;
    const div = document.createElement('div');
    div.className = 'flex flex-row  items-center';

    const step = document.createElement('input');
    step.id = 'step' + this.stepNum;
    step.className = 'bg-blue-100 w-full m-2 p-3 rounded text-lg border-4  hover:border-blue-500 text-black';
    step.placeholder = 'Describe Step';
    step.type = 'text';

    const button = document.createElement('button');
    button.id = 'step' + this.stepNum;
    button.className = 'w-4 fill-current text-red-500';

    const img = document.createElement('img');
    img.src = '../../assets/grocery/trash-alt-regular.svg';
    img.className = 'w-8';
    button.appendChild(img);

    const steps = document.getElementById('steps');
    div.appendChild(step);
    div.appendChild(button);
    steps.appendChild(div);
  }

  openGroceryDialog() {
    this.service.getIngredients();
    const dialogRef = this.dialog.open(GroceryDialogContentDialogComponent, {
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openUtensilsDialog() {
    this.service.getUtensils();
    const dialogRef = this.dialog.open(UtensilDialogContentDialogComponent, {width: '900px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  loadSteps() {
  }


  createNewRecipe(event) {

    console.log("In Create New Recipe Method()");

    event.preventDefault();
    this.service.getUtensils();

    const target = event.target;
    let recipe: Recipe = new Recipe();

    recipe.name = target.querySelector('#name').value;
    recipe.description = target.querySelector('#description').value;
    recipe.ingredients = this.service.getSelectedIngredients();
    recipe.utensils = this.service.getSelectedUtensils();
    recipe.steps = [];
    for (let i = 0; i <= this.stepNum; i++) {
      recipe.steps.push(target.querySelector('#step' + i).value);
    }

    let clase = this.service.getClass();

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.teacher.classList.length; i++) {
      if (this.teacher.classList[i].name == clase.name) {
        if (this.teacher.classList[i].recipes == null) {
          const recipes: Recipe[] = [];
          recipes.push(recipe);
          this.teacher.classList[i].recipes = recipes;
        } else {
          this.teacher.classList[i].recipes.push(recipe);
        }

        this.service.setClass(this.teacher.classList[i]);
      }
    }

    this.service.setTeacher(this.teacher);
    this.service.addNewRecipe(recipe).subscribe((data: string) => {
      console.log(data);
    });

    this.router.navigateByUrl('/instructorDashRecipe')
  }
}
