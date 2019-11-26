import {Component, Inject, Input, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {Class, Recipe, Teacher} from '../models/app-models';
import {Subscription} from 'rxjs';
import {InstructorComponent} from '../instructor/instructor.component';
import {InstructorNewRecipeComponent} from "../instructor-new-recipe/instructor-new-recipe.component";
import {InstructorDashboardComponent} from "../instructor-dashboard/instructor-dashboard.component";
import {Router} from "@angular/router";

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
  private selectedRecipe: Recipe;
  private teacherSubscription: Subscription;

  private classSubscription: Subscription;
  isOpen: boolean;

  constructor(private service: ApiService, private router: Router) {
    this.teacherSubscription = this.service.$teacher.subscribe((teacher: Teacher) => {
      this.teacher = teacher;
    });

    if (window.localStorage.getItem('user') != null) {
      this.teacher = JSON.parse(window.localStorage.getItem('user'));
    }
    if (window.sessionStorage.getItem('selectedClass') != null) {
      console.log('FROM SESSION STORAGE');
      this.classs = JSON.parse(window.sessionStorage.getItem('selectedClass'));
    }

    // if (window.sessionStorage.getItem('selectedRecipe') != null) {
    //   console.log("selectedRecipe not null: ", this.service.selectedRecipe);
    //   this.selectedRecipe = JSON.parse(window.sessionStorage.getItem("selectedRecipe"));
    // }

    this.displayingRecipeList = Object.assign(this.displayingRecipeList, this.classs.recipes);
  }

  ngOnInit() {

  }

  searchBarRecipe(event) {

    event.preventDefault();
    const target = event.target;
    console.log(target.querySelector('#searchBarRecipeText').value);
    var searchText = target.querySelector('#searchBarRecipeText').value;
    var n = this.classs.recipes.length;

    if (searchText == "") {

      this.displayingRecipeList = Object.assign(this.displayingRecipeList, this.classs.recipes);
      // this.displayingClassList = this.teacher.classList.splice(0);
    } else {
      while (this.displayingRecipeList.length > 0) {
        this.displayingRecipeList.pop();
      }

      for (var i = 0; i < n; i++) {
        var name = this.classs.recipes[i].name;
        if (searchText == name) {
          console.log("is present");
          this.displayingRecipeList.push(this.classs.recipes[i]);
        }
      }
    }

  }

  editRecipe(editRecipe: Recipe) {
    // this.service.setSelectedRecipe(editRecipe);
    // this.router.navigateByUrl("/newRecipe");
    // this.service.setSelectedRecipe(null);
  }

  deleteRecipe(deleteRecipe: Recipe) {
    let i = 0;
    while (i < this.classs.recipes.length) {
      var index;
      if (deleteRecipe == this.classs.recipes[i]) {
        index = this.classs.recipes.lastIndexOf(deleteRecipe);
        break;
      }
      i++;
    }

    let r = this.classs.recipes.splice(i, 1);
    this.displayingRecipeList.splice(i, 1);
    console.log("Recipe Deleted: ", r);
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  openDialog() {
  }
}
