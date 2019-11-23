import { Component, OnInit } from '@angular/core';
import {Class, Student} from '../models/app-models';

@Component({
  selector: 'student-recipes',
  templateUrl: './student-recipes.component.html',
})
export class StudentRecipesComponent {
  isOpen: boolean;
  private student: Student;
  private clas: Class;

  constructor() {
    if(this.student==null && window.localStorage.getItem('student') != null) {
      console.log("in Student local storage");
      this.student = JSON.parse(window.localStorage.getItem('student'));
    }
    if (this.clas == null && window.localStorage.getItem('selectedClass') != null) {
      console.log("in Student local storage");
      this.clas = JSON.parse(window.localStorage.getItem('selectedClass'));
    }
  }
}
