import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {MatDialog} from '@angular/material/dialog';
import {GroceryDialogContentDialogComponent} from '../grocery-dialog-content-dialog/grocery-dialog-content-dialog.component';
import {DialogForCreatingClassComponent} from '../dialog-for-creating-class/dialog-for-creating-class.component';
import {UtensilDialogContentDialogComponent} from '../utensil-dialog-content-dialog/utensil-dialog-content-dialog.component';
import {Class, Ingredient, Recipe, Step, Teacher, Utensil} from '../models/app-models';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatSnackBar} from '@angular/material';

// import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-instructor-new-recipe',
  templateUrl: './instructor-new-recipe.component.html',
  styleUrls: ['./instructor-new-recipe.component.css']
})

export class InstructorNewRecipeComponent implements OnInit {

  isOpen: boolean;

  @Input() teacher: Teacher;
  @Input() classs: Class;
  public selectedRecipe: Recipe;
  public teacherSubscription: Subscription;
  public selectedIngredients: Ingredient[] = [];
  public selectedUtensils: Utensil[] = [];
  public items: Object[] = [];
  public selectedFile: File = null;

  public texts: string[] = [];
  public idOfselect = 0;
  public selectiondoneornot = 0;
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
  imagURL: string;


  constructor(private service: ApiService, public dialog: MatDialog, private router: Router, private snackbar: MatSnackBar) {
    this.teacherSubscription = this.service.$teacher.subscribe((teacher: Teacher) => {
      this.teacher = teacher;
    });

    if (this.teacher == null && window.sessionStorage.getItem('user') != null) {
      console.log('in Teacher local storage');
      this.teacher = JSON.parse(window.sessionStorage.getItem('user'));
    }

    if (window.sessionStorage.getItem('selectedClass') != null) {
      console.log('FROM SESSION STORAGE');
      this.classs = JSON.parse(window.sessionStorage.getItem('selectedClass'));
    }

    if (this.selectedRecipe == null && window.sessionStorage.getItem('selectedRecipe') != null) {
      this.selectedRecipe = JSON.parse(window.sessionStorage.getItem('selectedRecipe'));
      console.log(window.sessionStorage.getItem('selectedRecipe'));
      console.log('selected Recipe', this.selectedRecipe);
    }
    if (this.selectedRecipe != null) {
      this.selectedIngredients = this.selectedRecipe.ingredients;
      this.selectedUtensils = this.selectedRecipe.utensils;
    }
  }

  ngOnInit() {
    this.stepNum = 0;
    if (this.selectedRecipe == null) {
      this.texts[0] = 'Name of Dish';
      this.texts[1] = 'Description';
      this.texts[2] = 'Type of Dish';
      this.texts[3] = 'Describe Step';
      this.texts[4] = 'Outcome';
    } else {
     // console.log(81, this.selectedRecipe);
      this.texts[0] = this.selectedRecipe.name;
      this.texts[1] = this.selectedRecipe.description;
      this.texts[2] = this.selectedRecipe.name;

      for (let i = 0; i < this.selectedRecipe.steps.length - 1; i++) {
          console.log('in the loop: ', this.selectedRecipe.steps);
          this.texts[3] = this.selectedRecipe.steps[0].description;
          this.texts[4] = this.selectedRecipe.steps[0].outcome;
          // this.texts[5] = this.selectedRecipe.steps[0].action;
          this.addStep(i);
      }
      window.sessionStorage.setItem('selectedRecipe', null);
    }
  }


  addStep(helperInaddinfstepsonedit) {
    console.log('helperInaddinfstepsonedit: ', helperInaddinfstepsonedit);
    // console.log(this.selectedIngredients.length);
    if (this.selectedIngredients.length === 0) {
      this.snackbar.open( ' Select ingredients before adding steps', 'Dismiss', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'center', politeness: 'assertive'});

    } else if (this.selectedUtensils.length === 0) {
      this.snackbar.open( ' Select utensils before adding steps', 'Dismiss', {duration: 3000, verticalPosition: 'top', horizontalPosition: 'center', politeness: 'assertive'});
    } else {


      this.stepNum += 1;

      const mainContainer = document.createElement('div');
      mainContainer.className = 'flex flex-row w-full items-center animated fadeIn mt-2';
      mainContainer.id = 'mainContainer' + this.stepNum;

      const step = document.createElement('textarea');
      step.id = 'step' + this.stepNum;
      step.className = 'resize-none p-2 border-4 hover:border-gray-600 border-gray-400';
      step.placeholder = 'Describe Step';


      const outcome = document.createElement('textarea');
      outcome.id = 'step' + this.stepNum + this.stepNum + this.stepNum;
      outcome.className = 'resize-none p-2 border-4 hover:border-gray-600 border-gray-400';
      outcome.placeholder = 'Outcome';

      // <div class="">
      const divfortexareas = document.createElement('div');
      divfortexareas.className = 'flex flex-col w-full h-full justify-between ';

      const outcomeimage = document.createElement('input');
      outcomeimage.id = 'imageFinalStep' + this.stepNum;
      outcomeimage.className = 'flex- w-1/2 h-full text-center p-1 mx-2 border-4 hover:border-gray-600 border-gray-400';
      outcomeimage.type = 'file';

      const button = document.createElement('button');
      button.className = 'w-6';

      // @ts-ignore
      button.addEventListener('click', this.deleteStep);
      const img = document.createElement('img');
      img.src = '../../assets/grocery/trash-alt-regular.svg';
      img.id = 'step' + this.stepNum + this.stepNum;
      img.className = 'ml-2 w-4';
      button.appendChild(img);
      this.idOfselect++;
      // <div class="">
      const divforselects = document.createElement('div');
      divforselects.className = 'flex flex-col ';

      const select = document.createElement('select');
      select.className = 'w-1/7 bg-gray-300 my-2 mr-2 p-2 h-10';
      select.name = 'Action';
      select.id = 'select' + this.idOfselect;

      const select2 = document.createElement('select');
      select2.className = 'w-1/7 bg-gray-300 my-2 mr-2 p-2 h-10';
      select2.name = 'Ingredients';
      select2.id = 'select' + this.idOfselect + this.idOfselect;

      const select3 = document.createElement('select');
      select3.className = 'w-1/7 bg-gray-300 my-2 mr-2 p-2 h-10';
      select3.name = 'Utensils';
      select3.id = 'select' + this.idOfselect + this.idOfselect + this.idOfselect + this.idOfselect;

      // <option disabled selected value> Select Ingredient </option>

      const optiondisabled = document.createElement('option');
      optiondisabled.value = 'No Action';
      optiondisabled.textContent = 'No Action';
      select.appendChild(optiondisabled);

      const optiondisabled_2 = document.createElement('option');
      optiondisabled_2.value = 'No Ingredient';
      optiondisabled_2.textContent = 'No Ingredient';
      select2.appendChild(optiondisabled_2);

      const optiondisabled_3 = document.createElement('option');
      optiondisabled_3.value = 'No Utensil';
      optiondisabled_3.textContent = 'No Utensil';
      select3.appendChild(optiondisabled_3);

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.selected.length; i++) {
        const option = document.createElement('option');
        option.textContent = this.selected[i];
        select.appendChild(option);
      }

      // tslint:disable-next-line:prefer-for-of
      if (this.selectedIngredients.length !== 0) {
        for (let i = 0; i < this.selectedIngredients.length; i++) {
          const option1 = document.createElement('option');
          option1.textContent = this.selectedIngredients[i].name;
          select2.appendChild(option1);
        }
      }


      if (this.selectedUtensils.length !== 0) {
        console.log(this.selectedUtensils);
        for (let i = 0; i < this.selectedUtensils.length; i++) {
          const option1 = document.createElement('option');
          option1.textContent = this.selectedUtensils[i].name;
          select3.appendChild(option1);
        }
      }

      if (this.selectedRecipe != null) {
        step.placeholder = this.selectedRecipe.steps[helperInaddinfstepsonedit].description;
        console.log('1111', this.selectedRecipe.steps[helperInaddinfstepsonedit].description);
        outcome.placeholder = this.selectedRecipe.steps[helperInaddinfstepsonedit].outcome;
        select.value = this.selectedRecipe.steps[helperInaddinfstepsonedit].action;
        select2.value = this.selectedRecipe.steps[helperInaddinfstepsonedit].ingredient.name;
        // @ts-ignore
        outcomeimage.value = this.selectedRecipe.steps[helperInaddinfstepsonedit].imageFile;
      }

      const line = document.createElement('hr');
      line.className = 'border-t-2  border-black m-2';


      const steps = document.getElementById('steps');
      divforselects.appendChild(select);
      divforselects.appendChild(select2);
      divforselects.appendChild(select3);
      mainContainer.appendChild(divforselects);
      divfortexareas.appendChild(step);
      divfortexareas.appendChild(outcome);
      mainContainer.appendChild(divfortexareas);
      mainContainer.appendChild(outcomeimage);
      mainContainer.appendChild(button);
      steps.appendChild(mainContainer);
      steps.appendChild(line);
    }
  }
  openGroceryDialog() {
    this.service.getIngredients();
    const dialogRef = this.dialog.open(GroceryDialogContentDialogComponent, {
      maxWidth: '800px', maxHeight: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.selectedIngredients = this.service.getSelectedIngredients();
      console.log(this.selectedIngredients);
      this.selectiondoneornot = 1;
    });
    // tslint:disable-next-line:radix
    this.selectedClass = parseInt(window.sessionStorage.getItem('ingredientAmount'));
  }

  openUtensilsDialog() {
    this.service.getUtensils();
    const dialogRef = this.dialog.open(UtensilDialogContentDialogComponent, {maxWidth: '800px', maxHeight: '600px'});

    dialogRef.afterClosed().subscribe(result => {
      this.selectedUtensils = this.service.getSelectedUtensils();

      console.log(`Dialog result: ${result}`);
    });
    // tslint:disable-next-line:radix
    this.selectedClassUtensils = parseInt(window.sessionStorage.getItem('utensilsAmount'));
  }
  deleteStep(event) {
    event.preventDefault();
    const target = event.target.id;
    console.log(target);
    document.getElementById(target).remove();
    const temp = target;

    const select = 'select' + temp.slice(temp.length - 1, temp.length);
    document.getElementById(select).remove();

    const slicedval = (temp.slice(temp.length - 1, temp.length));
    const stepdelete = 'step' + slicedval ;
    const outcome = 'step' + slicedval + slicedval + slicedval;
    const image = 'imageFinalStep' + slicedval;
    const select2 = 'select' + slicedval + slicedval ;
    const select3 = 'select' + slicedval + slicedval + slicedval + slicedval;

    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    document.getElementById('mainContainer' + slicedval ).className = 'flex flex-row w-full items-center animated fadeOut';

    sleep(600).then(() => {
      document.getElementById(stepdelete).remove();
      document.getElementById(outcome).remove();
      document.getElementById(image).remove();
      document.getElementById(select2).remove();
      document.getElementById(select3).remove();

    });
    console.log(slicedval, stepdelete, outcome, image);
  }
  createNewRecipe(event) {
    console.log('In Create New Recipe Method()');

    event.preventDefault();
    this.service.getUtensils();

    const target = event.target;
    // @ts-ignore
    const recipe: Recipe = {};

    recipe.name = target.querySelector('#name').value;
    recipe.description = target.querySelector('#description').value;
    recipe.ingredients = this.service.getSelectedIngredients();
    recipe.utensils = this.service.getSelectedUtensils();


    recipe.steps = [];
    for (let i = 0; i <= this.stepNum; i++) {
      // @ts-ignore
      const stepp: Step =  {};
      stepp.description = target.querySelector('#step' + i).value;
      stepp.action = target.querySelector('#select' + i).value;
      stepp.outcome = target.querySelector('#step' + i + i + i).value;
      stepp.imageFile = target.querySelector('#imageFinalStep' + i).value;
      const name = target.querySelector('#select' + i + '' + i).value;

      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < this.selectedIngredients.length; j++) {
          if (this.selectedIngredients[j].name === name) {
            stepp.ingredient = this.selectedIngredients[j];
          }
        }
      console.log('273', stepp);
      recipe.steps.push(stepp);
    }

    console.log('HOLLLLLLLLLAAAAA' , recipe);

    // const clase = this.service.getClass();
    console.log(this.classs);
    if (this.classs.recipes == null) {
      const recipes: Recipe[] = [];
      recipes.push(recipe);
      this.classs.recipes = recipes;
    } else {
      this.classs.recipes.push(recipe);
      console.log(this.classs.recipes);

      console.log('INSIDE PUSH METHOD');
    }

    console.log(this.classs);

    this.service.updateStudentsinClass(this.classs).subscribe((data: string) => {
      console.log(data);
    });

    this.router.navigateByUrl('/instructorDashRecipe');
  }
  selectedFileMethod(file: FileList) {
    this.selectedFile = file.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imagURL = event.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
    console.log(this.selectedFile);
  }
  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }
}
