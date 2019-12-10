import { Component, OnInit } from '@angular/core';
import {Class, Recipe, Step, Student, Utensil} from '../models/app-models';
import {MatDialog} from '@angular/material';
import {GlobalClassListComponent} from '../global-class-list/global-class-list.component';
import {Router} from '@angular/router';


@Component({
  selector: 'student-recipes',
  templateUrl: './student-recipes.component.html',
})
export class StudentRecipesComponent implements OnInit{
  isOpen: boolean;
  private student: Student;
  private clas: Class;
  private displayingRecipeList: Recipe[] = [];

  constructor(private dialog: MatDialog, private router: Router) {
    if(window.sessionStorage.getItem('student') != null) {
      console.log("in Student local storage");
      this.student = JSON.parse(window.sessionStorage.getItem('student'));
    }
    if (window.sessionStorage.getItem('selectedClass') != null) {
      console.log("in Student local storage");
      this.clas = JSON.parse(window.sessionStorage.getItem('selectedClass'));
    }
    console.log(this.displayingRecipeList, this.clas.recipes);
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
    const searchText = target.querySelector('#searchBarRecipeText').value;

    var filter = searchText.toUpperCase();
    // this clears the list
    var l = this.displayingRecipeList.length;
    this.displayingRecipeList.splice(0, l);

    //this updates the list in real time.
    for(var i =0;i<this.clas.recipes.length; i++){
      var a = this.clas.recipes[i];

      if(a.name.toUpperCase().indexOf(filter) > -1){
        this.displayingRecipeList.push(this.clas.recipes[i]);
      }
    }
  }

  deleteRecipe(deleteRecipe: Recipe) {
    let i = 0;
    while (i < this.clas.recipes.length) {
      let index;
      if (deleteRecipe == this.clas.recipes[i]) {
        index = this.clas.recipes.lastIndexOf(deleteRecipe);
        break;
      }
      i++;
    }

    const r = this.clas.recipes.splice(i, 1);
    this.displayingRecipeList.splice(i, 1);
    console.log('Recipe Deleted: ', r);
  }

  cookRecipe(rec: Recipe) {
    // let ut1 = new Utensil();
    // ut1.name = "Fry pan";
    // let ut2 = new Utensil();
    // ut2.name = "PANNY PAN";
    // rec.utensils.push(ut1, ut2);

    window.sessionStorage.setItem('recipeSelected', JSON.stringify(rec));
    console.log(JSON.parse(window.sessionStorage.getItem('recipeSelected')));
    this.router.navigateByUrl("/studentDashboard");
  }
}
