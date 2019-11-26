import { Component, OnInit } from '@angular/core';
import {Class, Student} from '../models/app-models';
import {MatDialog} from '@angular/material';
import {GlobalClassListComponent} from '../global-class-list/global-class-list.component';


@Component({
  selector: 'student-recipes',
  templateUrl: './student-recipes.component.html',
})
export class StudentRecipesComponent implements OnInit{
  isOpen: boolean;
  private student: Student;
  private clas: Class;
  private displayingRecipeList: Recipe[] = [];

  constructor(private dialog: MatDialog) {
    if(this.student==null && window.localStorage.getItem('student') != null) {
      console.log("in Student local storage");
      this.student = JSON.parse(window.localStorage.getItem('student'));
    }
    if (this.clas == null && window.localStorage.getItem('selectedClass') != null) {
      console.log("in Student local storage");
      this.clas = JSON.parse(window.localStorage.getItem('selectedClass'));
    }

    this.displayingRecipeList = Object.assign(this.displayingRecipeList, this.clas.recipes);
  }


  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

  openDialogue() {
    const dialogRef = this.dialog.open(GlobalClassListComponent, {
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  searchBarRecipe(event) {

    event.preventDefault();
    const target = event.target;
    console.log(target.querySelector('#searchBarRecipeText').value);
    var searchText = target.querySelector('#searchBarRecipeText').value;

    if (searchText == "") {

      this.displayingRecipeList = Object.assign(this.displayingRecipeList, this.clas.recipes);
      // this.displayingClassList = this.teacher.classList.splice(0);
    } else {
      while (this.displayingRecipeList.length > 0) {
        this.displayingRecipeList.pop();
      }

      for (var i = 0; i < this.clas.recipes.length; i++) {
        var name = this.clas.recipes[i].name;
        if (searchText == name) {
          console.log("is present");
          this.displayingRecipeList.push(this.clas.recipes[i]);
        }
      }
    }
  }

  deleteRecipe(deleteRecipe: Recipe) {
    let i = 0;
    while (i < this.clas.recipes.length) {
      var index;
      if (deleteRecipe == this.clas.recipes[i]) {
        index = this.clas.recipes.lastIndexOf(deleteRecipe);
        break;
      }
      i++;
    }

    let r = this.clas.recipes.splice(i, 1);
    this.displayingRecipeList.splice(i, 1);
    console.log("Recipe Deleted: ", r);
  }
}
