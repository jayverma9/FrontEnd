import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';
import {MatDialog} from '@angular/material/dialog';
import {GroceryDialogContentDialogComponent} from '../grocery-dialog-content-dialog/grocery-dialog-content-dialog.component';
import {DialogForCreatingClassComponent} from '../dialog-for-creating-class/dialog-for-creating-class.component';
import {UtensilDialogContentDialogComponent} from '../utensil-dialog-content-dialog/utensil-dialog-content-dialog.component';
import {Class, Recipe, Teacher} from '../models/app-models';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-instructor-new-recipe',
  templateUrl: './instructor-new-recipe.component.html',
  styleUrls: ['./instructor-new-recipe.component.css']
})
export class InstructorNewRecipeComponent implements OnInit {

  isOpen: boolean;

  public teacher;
  public teacherSubscription: Subscription;

  private stepNum: number;

  constructor(private service: ApiService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.teacherSubscription = this.service.$teacher.subscribe((teacher: Teacher) => {
      this.teacher = teacher;
    });
    this.stepNum = 0;
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  addStep() {

    // tslint:disable-next-line:max-line-length
    this.stepNum+=1;
    let step = document.createElement('input');
    step.id = "step"+this.stepNum;
    step.className="bg-blue-100 w-6/2 m-2 p-3 rounded text-lg border-4  hover:border-blue-500 text-black";
    step.placeholder = "Describe Step";
    step.type = "text";

    const steps = document.getElementById('steps');
    steps.appendChild(step);
  }

  openGroceryDialog() {
    this.service.getIngredients();
    const dialogRef = this.dialog.open(GroceryDialogContentDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openUtensilsDialog() {
    this.service.getUtensils();
    const dialogRef = this.dialog.open(UtensilDialogContentDialogComponent, {width: '500px',});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  createNewRecipe(event) {
    event.preventDefault();
    this.service.getUtensils();

    const target = event.target;
    let recipe: Recipe = new Recipe();
    recipe.name = target.querySelector('#name').value;
    recipe.description  = target.querySelector('#description').value;
    recipe.ingredients = this.service.getSelectedIngredients();
    recipe.utensils = this.service.getSelectedUtensils();
    recipe.steps = [];
    for(let i = 0; i <=this.stepNum; i++) {
      recipe.steps.push(
        target.querySelector('#step'+i).value
      )
    }

    let clase = this.service.getClass();

    for(let i = 0; i < this.teacher.classList.length; i++) {
      if(this.teacher.classList[i].name == clase.name) {
        this.teacher.classList[i].recipes.push(recipe);
      }
    }

    this.service.setTeacher(this.teacher);

    this.service.addNewRecipe(recipe).subscribe((data: string) =>
    {
      console.log(data);
    });
  }
}
