import {Component, Inject, Input, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {Class, Recipe, Teacher} from '../models/app-models';
import {Subscription} from 'rxjs';
import {InstructorComponent} from '../instructor/instructor.component';
import {InstructorNewRecipeComponent} from '../instructor-new-recipe/instructor-new-recipe.component';
import {Router} from '@angular/router';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-instructor-recipe-dashboard',
  templateUrl: './instructor-recipe-dashboard.component.html',
  styleUrls: ['./instructor-recipe-dashboard.component.css']
})

export class InstructorRecipeDashboardComponent implements OnInit {
  @Input() teacher: Teacher;
  @Input() classs: Class;
  @Input() displayingRecipeList: Recipe[] = [];
  private recipes: Recipe[];
  // private selectedRecipe: Recipe;
  private teacherSubscription: Subscription;
  teacherClassList: Class[];

  private classSubscription: Subscription;
  isOpen: boolean;
  searchValue: String = "";

  constructor(private service: ApiService, private router: Router, private snackbar: MatSnackBar) {
    if(window.sessionStorage.getItem('user')==null){
      this.router.navigateByUrl('');
    }

    this.teacherSubscription = this.service.$teacher.subscribe((teacher: Teacher) => {
      this.teacher = teacher;
    });

    if (this.teacher == null && window.sessionStorage.getItem('user') != null) {
      console.log('in Teacher local storage');
      this.teacher = JSON.parse(window.sessionStorage.getItem('user'));
    }


    if (window.sessionStorage.getItem('user') != null) {
      this.teacher = JSON.parse(window.sessionStorage.getItem('user'));
    }
    if (window.sessionStorage.getItem('selectedClass') != null) {
      console.log('FROM SESSION STORAGE');
      this.classs = JSON.parse(window.sessionStorage.getItem('selectedClass'));
    }
    //
    // if (window.localStorage.getItem('selectedRecipe') != null) {
    //   this.selectedRecipe = JSON.parse(window.sessionStorage.getItem("selectedRecipe"));
    //   console.log("selectedRecipe not null: ", this.service.selectedRecipe);
    // }

    this.displayingRecipeList = Object.assign(this.displayingRecipeList, this.classs.recipes);
  }

  ngOnInit() {
    this.service.getClassesForTeacher(this.teacher.username).subscribe((classs: Class[]) => {

      this.teacherClassList = classs;
      for (let i = 0; i < this.teacherClassList.length; i++) {
        if (this.teacherClassList[i].name == JSON.parse(window.sessionStorage.getItem('selectedClass')).name) {
          window.sessionStorage.setItem('selectedClass', JSON.stringify(this.teacherClassList[i]));
          this.classs = JSON.parse(window.sessionStorage.getItem('selectedClass'));
          this.displayingRecipeList = Object.assign(this.displayingRecipeList, this.classs.recipes);
          console.log('IDHAR AAYA MAI');
        }
      }
    });
  }

  searchBarRecipe() {

    var searchText = this.searchValue;
    const n = this.classs.recipes.length;

    let filter = searchText.toUpperCase();
    console.log(filter);
    // this clears the list
    let l = this.displayingRecipeList.length;
    this.displayingRecipeList.splice(0, l);

    // this updates the list in real time.
    for (let i = 0; i < this.classs.recipes.length; i++) {
      let a = this.classs.recipes[i];

      if (a.name.toUpperCase().indexOf(filter) > -1) {
        this.displayingRecipeList.push(this.classs.recipes[i]);
      }
    }

  }

  editRecipe(editRecipe: Recipe) {
    // this.service.setSelectedRecipe(editRecipe);
    window.sessionStorage.setItem('selectedRecipe', JSON.stringify(editRecipe));
    console.log('Inside EDIT RECIPE \nSelected Recipe: ', editRecipe);
    this.router.navigateByUrl('/editRecipe');

  }

  deleteRecipe(deleteRecipe: Recipe) {
    // tslint:disable-next-line:max-line-length
    this.snackbar.open(deleteRecipe.name + ' Recipe Deleted', 'Dismiss', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      politeness: 'assertive'
    });

    let i = 0;
    while (i < this.classs.recipes.length) {
      let index;
      if (deleteRecipe.name === this.classs.recipes[i].name) {
        index = this.classs.recipes.lastIndexOf(deleteRecipe);
        break;
      }
      i++;
    }

    this.classs.recipes.splice(i, 1);
    this.service.updateStudentsinClass(this.classs).subscribe((data: string) => {
      console.log(data);
    });

    const r = this.classs.recipes.splice(i, 1);
    this.displayingRecipeList.splice(i, 1);
    console.log('Recipe Deleted: ', r);
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  openDialog() {
  }
}
