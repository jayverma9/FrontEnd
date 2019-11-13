import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';
import {MatDialog} from '@angular/material/dialog';
import {GroceryDialogContentDialogComponent} from '../grocery-dialog-content-dialog/grocery-dialog-content-dialog.component';
import {DialogForCreatingClassComponent} from '../dialog-for-creating-class/dialog-for-creating-class.component';
import {UtensilDialogContentDialogComponent} from '../utensil-dialog-content-dialog/utensil-dialog-content-dialog.component';


@Component({
  selector: 'app-instructor-new-recipe',
  templateUrl: './instructor-new-recipe.component.html',
  styleUrls: ['./instructor-new-recipe.component.css']
})
export class InstructorNewRecipeComponent implements OnInit {

  isOpen: boolean;

  public teach = this.service.teacher;

  constructor(private service: ApiService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  addStep() {

    const step = document.createElement('div');
    // tslint:disable-next-line:max-line-length
    step.innerHTML = '<input type="text" placeholder="Describe Step" class="bg-blue-100 w-6/2 m-2 p-3 rounded text-lg border-4  hover:border-blue-500 text-black">';

    const steps = document.getElementById('steps');
    steps.appendChild(step);
  }

  openGroceryDialog() {
    const dialogRef = this.dialog.open(GroceryDialogContentDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openUtensilsDialog() {

    const dialogRef = this.dialog.open(UtensilDialogContentDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

}
