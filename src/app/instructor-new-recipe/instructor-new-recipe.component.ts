import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {MatDialog} from '@angular/material/dialog';
import {GroceryDialogContentDialogComponent} from '../grocery-dialog-content-dialog/grocery-dialog-content-dialog.component';
import {DialogForCreatingClassComponent} from '../dialog-for-creating-class/dialog-for-creating-class.component';
import {UtensilDialogContentDialogComponent} from '../utensil-dialog-content-dialog/utensil-dialog-content-dialog.component';
import {Recipe, Teacher} from '../models/app-models';
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
  selectedClass: number = 0;
  dishname:string = "";
  selectedClassUtensils: number = 0;
  durationInSeconds: number;

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
    this.texts[10] = "New Recipe"

  }

  ngOnInit() {
    this.stepNum = 0;
    if (this.selectedRecipe == null) {
      this.texts[5] = "";
      this.texts[6] = "";
      this.texts[7] = String(0);
      this.texts[8] = "";
      this.texts[9] = "";
    } else {
      this.texts[5] = this.selectedRecipe.name;
      this.texts[6] = this.selectedRecipe.description;
      this.texts[7] = String(45);
      this.texts[8] = "Path not yet defined";
      this.texts[9] = "Main Course";
      this.texts[10] = "Edit Recipe";

      for (let i = 0; i < this.selectedRecipe.steps.length; i++) {
        if(i!=0){
          this.addStep();
        }
        const temp = document.getElementById('step0');
        temp.nodeValue = this.selectedRecipe.steps[i];

      }
      window.sessionStorage.setItem("selectedRecipe", null);
    }
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }


  addStep() {

    this.stepNum += 1;

    const step = document.createElement('input');
    step.id = 'step' + this.stepNum ;
    step.className = 'bg-blue-100 w-1/2 m-2 p-3 rounded text-lg border-4  hover:border-blue-500 text-black';
    step.placeholder = 'Describe Step';
    step.type = 'text';

    const button = document.createElement('button');
    button.className = 'w-4';
    // @ts-ignore
    button.addEventListener('click', this.deleteStep)
    const img = document.createElement('img');
    img.src = '../../assets/grocery/trash-alt-regular.svg';
    img.id = 'step' + this.stepNum + this.stepNum;
    button.appendChild(img);

    const steps = document.getElementById('steps');

    steps.appendChild(step);
    steps.appendChild(button);
  }

  openGroceryDialog() {
    this.service.getIngredients();
    const dialogRef = this.dialog.open(GroceryDialogContentDialogComponent, {
      maxWidth:'800px', maxHeight: "800px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    this.selectedClass = parseInt(window.sessionStorage.getItem('ingredientAmount'));

  }

  openUtensilsDialog() {
    this.service.getUtensils();
    const dialogRef = this.dialog.open(UtensilDialogContentDialogComponent, {width: '900px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.selectedClassUtensils = parseInt(window.sessionStorage.getItem('utensilsAmount'));
  }

  loadSteps() {
  }


  // createNewRecipe(event) {
  //   console.log(this.dishname);
  //
  //   console.log("In Create New Recipe Method()");
  //
  //   event.preventDefault();
  //   this.service.getUtensils();
  //
  //   const target = event.target;
  //   let recipe: Recipe = new Recipe();
  //
  //   recipe.name = target.querySelector('#name').value;
  //   recipe.description = target.querySelector('#description').value;
  //   recipe.ingredients = this.service.getSelectedIngredients();
  //   recipe.utensils = this.service.getSelectedUtensils();
  //   recipe.steps = [];
  //   for (let i = 0; i <= this.stepNum; i++) {
  //
  //     recipe.steps.push(target.querySelector('#step' + i).value);
  //   }
  //
  //   let clase = this.service.getClass();
  //
  //   for(let i = 0; i < this.teacher.classList.length; i++) {
  //     if(this.teacher.classList[i].name == clase.name) {
  //       if(this.teacher.classList[i].recipes == null) {
  //         let recipes: Recipe[] = [];
  //         recipes.push(recipe);
  //         this.teacher.classList[i].recipes = recipes;
  //       }
  //       else {
  //         this.teacher.classList[i].recipes.push(recipe);
  //       }
  //       this.service.setClass(this.teacher.classList[i])
  //     }
  //   }
  //
  //   this.service.setTeacher(this.teacher);
  //
  //   this.service.addNewRecipe(recipe).subscribe((data: string) =>
  //   {
  //     console.log(data);
  //   });
  //
  //   this.router.navigateByUrl('/instructorDashRecipe')
  // }

  deleteStep(event) {
    event.preventDefault();
    let target = event.target.id;
    console.log(target)

    let todel_1 = document.getElementById(target)
    todel_1.remove()

    target = target.slice(0, target.length-1)
    console.log(target)

    let todel = document.getElementById(target)
    todel.remove()
  }
}
