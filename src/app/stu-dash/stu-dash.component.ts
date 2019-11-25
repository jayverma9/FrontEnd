import { Component, OnInit } from '@angular/core';
import {Class, Student} from '../models/app-models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stu-dash',
  templateUrl: './stu-dash.component.html',
  styleUrls: ['./stu-dash.component.css']
})
export class StuDashComponent implements OnInit {
    isOpen: boolean;
    private student: Student;
  constructor(private router: Router) {
    if (this.student == null && window.localStorage.getItem('student') != null) {
      console.log('in Student local storage');
      this.student = JSON.parse(window.localStorage.getItem('student'));
    }
  }

  ngOnInit() {
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  classSelected(clas: Class) {
    window.localStorage.setItem('selectedClass', JSON.stringify(clas));
    this.router.navigateByUrl('/studentDashRecipe');
  }
}
