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
  public idOfselect = 0;
  public selected: string[] = ['Wash', 'Grate',
    'Grill', 'Melt', 'Pinch', 'Pour',
    'Simmer', 'Slice', 'Spread', 'Stir',
    'Add', 'Bake', 'Blend', 'Broil', 'Chop',
    'Dip', 'Fry'];

  private stepNum: number;
  selectedClass = 0;
  dishname = '';
  selectedClassUtensils = 0;
  durationInSeconds: number;


  constructor(private service: ApiService, public dialog: MatDialog, private router: Router) {
    this.teacherSubscription = this.service.$teacher.subscribe((teacher: Teacher) => {
      this.teacher = teacher;
    });

    if (this.teacher == null && window.sessionStorage.getItem('user') != null) {
      console.log('in Teacher local storage');
      this.teacher = JSON.parse(window.sessionStorage.getItem('user'));
    }

    if (this.selectedRecipe == null && window.sessionStorage.getItem('selectedRecipe') != null) {
      this.selectedRecipe = JSON.parse(window.sessionStorage.getItem('selectedRecipe'));
      console.log(window.sessionStorage.getItem('selectedRecipe'));
      console.log('selected Recipe', this.selectedRecipe);
    }

    this.texts[0] = 'Name of Dish';
    this.texts[1] = 'Description';
    this.texts[2] = 'Cooking Time (minutes)';
    this.texts[3] = 'Image';
    this.texts[4] = 'What type of dish is it?';
    this.texts[10] = 'New Recipe';

  }

  ngOnInit() {
    this.stepNum = 0;
    if (this.selectedRecipe == null) {
      this.texts[5] = '';
      this.texts[6] = '';
      this.texts[7] = String(0);
      this.texts[8] = '';
      this.texts[9] = '';
    } else {
      this.texts[5] = this.selectedRecipe.name;
      this.texts[6] = this.selectedRecipe.description;
      this.texts[7] = String(45);
      this.texts[8] = 'Path not yet defined';
      this.texts[9] = 'Main Course';
      this.texts[10] = 'Edit Recipe';

      for (let i = 0; i < this.selectedRecipe.steps.length; i++) {
        if (i != 0) {
          this.addStep();
        }

        const temp = document.getElementById('step0');
        console.log(temp);
        temp.innerText = this.selectedRecipe.steps[i][1];
        temp.nodeValue = this.selectedRecipe.steps[i][1];

      }
      window.sessionStorage.setItem('selectedRecipe', null);
    }
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  addStep() {

    this.stepNum += 1;
    // <select  class=" name="Action" id="">
    // <option *ngFor="let action of actions; let i = index" value="Wash">{{this.actions[i]}}</option>
    // </select>
    const mainContainer = document.createElement('div');
    mainContainer.className = 'flex flex-row w-full';

    const step = document.createElement('input');
    step.id = 'step' + this.stepNum;
    step.className = 'w-2/3 m-2 p-2 border-4 hover:border-gray-600 border-gray-400';
    step.placeholder = 'Describe Step';
    step.type = 'text';

    const button = document.createElement('button');
    button.className = 'w-4';
    // @ts-ignore
    button.addEventListener('click', this.deleteStep);
    const img = document.createElement('img');
    img.src = '../../assets/grocery/trash-alt-regular.svg';
    img.id = 'step' + this.stepNum + this.stepNum;
    button.appendChild(img);

    const select = document.createElement('select');
    select.className = 'w-1/3 bg-gray-300 my-2 mr-2 p-2';
    select.name = 'Action';
    this.idOfselect++;

    select.id = 'select' + this.idOfselect;

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.selected.length; i++) {
      const option = document.createElement('option');
      option.textContent = this.selected[i];
      select.appendChild(option);
    }

    const steps = document.getElementById('steps');
    mainContainer.appendChild(select);
    mainContainer.appendChild(step);
    mainContainer.appendChild(button);
    steps.appendChild(mainContainer);
  }

  // @ts-ignore
  openGroceryDialog() {
    this.service.getIngredients();
    const dialogRef = this.dialog.open(GroceryDialogContentDialogComponent, {
      maxWidth: '800px', maxHeight: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    this.selectedClass = parseInt(window.sessionStorage.getItem('ingredientAmount'));

  }

  openUtensilsDialog() {
    this.service.getUtensils();
    const dialogRef = this.dialog.open(UtensilDialogContentDialogComponent, {maxWidth: '800px', maxHeight: '600px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.selectedClassUtensils = parseInt(window.sessionStorage.getItem('utensilsAmount'));
  }

  deleteStep(event) {
    event.preventDefault();
    let target = event.target.id;
    console.log(target);

    const todel_1 = document.getElementById(target);
    todel_1.remove();
    const temp = target;

    const select = 'select' + temp.slice(temp.length - 1, temp.length);
    console.log(select);

    const ss = document.getElementById(select);
    ss.remove();

    target = target.slice(0, target.length - 1);
    console.log(target);

    const todel = document.getElementById(target);
    todel.remove();

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
      var s = target.querySelector('#select' + i).value;
      let step = [s, target.querySelector('#step' + i).value];
      recipe.steps.push(step);
    }

    console.log();
    let clase = this.service.getClass();

    for(let i = 0; i < this.teacher.classList.length; i++) {
      if(this.teacher.classList[i].name == clase.name) {
        console.log("INSIDE RECIPE PUSH ON THE CLASS LIST");
        if(this.teacher.classList[i].recipes == null) {
          let recipes: Recipe[] = [];
          recipes.push(recipe);
          this.teacher.classList[i].recipes = recipes;
        }
        else {
          this.teacher.classList[i].recipes.push(recipe);
          console.log("INSIDE PUSH METHOD");
        }
        this.service.setClass(this.teacher.classList[i])
      }
    }
    this.service.setTeacher(this.teacher);
    this.service.addNewRecipe(recipe).subscribe((data: string) =>
    {
      console.log(data);
    });
    this.router.navigateByUrl('/instructorDashRecipe')
  }

}
