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

  constructor(private dialog: MatDialog) {
    if(this.student==null && window.localStorage.getItem('student') != null) {
      console.log("in Student local storage");
      this.student = JSON.parse(window.localStorage.getItem('student'));
    }
    if (this.clas == null && window.localStorage.getItem('selectedClass') != null) {
      console.log("in Student local storage");
      this.clas = JSON.parse(window.localStorage.getItem('selectedClass'));
    }
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
}
