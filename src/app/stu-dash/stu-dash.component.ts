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
  private displayingClassList: Class[] = [];


  constructor(private router: Router) {
    if (this.student == null && window.localStorage.getItem('student') != null) {
      console.log('in Student local storage');
      this.student = JSON.parse(window.localStorage.getItem('student'));
    }
    this.displayingClassList = Object.assign(this.displayingClassList, this.student.classList);
    console.log(this.displayingClassList, this.student.classList);
  }

  ngOnInit() {
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  classSelected(clas: Class) {
    window.localStorage.setItem("selectedClass", JSON.stringify(clas));
    this.router.navigateByUrl("/studentDashRecipe")
  }
  searchBarClass(event) {

    event.preventDefault();
    const target = event.target;
    console.log(target.querySelector('#searchBarText').value);
    var searchText = target.querySelector('#searchBarText').value;

    if (searchText == "") {

      this.displayingClassList = Object.assign(this.displayingClassList, this.student.classList);
      // this.displayingClassList = this.teacher.classList.splice(0);
    } else {
      while (this.displayingClassList.length > 0) {
        this.displayingClassList.pop();
      }

      for (var i = 0; i < this.student.classList.length; i++) {
        var name = this.student.classList[i].name;
        if (searchText == name) {
          console.log("is present");
          this.displayingClassList.push(this.student.classList[i]);
        }
      }
    }
  }

  deleteClass(deleteClass: Class) {
    let i = 0;
    while (i < this.student.classList.length) {
      var index;
      if (deleteClass == this.student.classList[i]) {
        index = this.student.classList.lastIndexOf(deleteClass);
        break;
      }
      i++;
    }

    let r = this.student.classList.splice(i, 1);
    this.displayingClassList.splice(i, 1);
    console.log("Recipe Deleted: ", r);
  }
}
