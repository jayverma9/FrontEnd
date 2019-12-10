import { Component, OnInit } from '@angular/core';
import {Class, Student} from '../models/app-models';
import {Router} from '@angular/router';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-stu-dash',
  templateUrl: './stu-dash.component.html',
  styleUrls: ['./stu-dash.component.css']
})
export class StuDashComponent implements OnInit {
  isOpen: boolean;
  public student: Student;
  private studentClassList: Class[] = [];
  private displayingClassList: Class[] = [];


  constructor(private router: Router, private service: ApiService) {
    if (this.student == null && window.localStorage.getItem('student') != null) {
      console.log('in Student local storage');
      this.student = JSON.parse(window.localStorage.getItem('student'));
    }
    this.service.getClassesForStudent(this.student.username).subscribe((classs: Class[]) => {
      this.studentClassList = classs;
      window.sessionStorage.setItem('studentClassList', JSON.stringify(this.studentClassList));
      console.log(classs);
      this.displayingClassList = Object.assign( this.displayingClassList, this.studentClassList);
    });
  }

  ngOnInit() {
    this.service.getClassesForStudent(this.student.username).subscribe((classs: Class[]) => {
      this.studentClassList = classs;
      window.sessionStorage.setItem('studentClassList', JSON.stringify(this.studentClassList));
      console.log(classs);
      this.displayingClassList = Object.assign( this.displayingClassList, this.studentClassList);
    });
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
    var filter = searchText.toUpperCase();
    var l = this.displayingClassList.length;
    this.displayingClassList.splice(0, l);

    //this updates the list in real time.
    for(var i =0;i<this.studentClassList.length; i++){
      var a = this.studentClassList[i];

      if(a.name.toUpperCase().indexOf(filter) > -1){
        this.displayingClassList.push(this.studentClassList[i]);
      }
    }
 }

  deleteClass(deleteClass: Class) {

    let index = this.studentClassList.lastIndexOf(deleteClass);
    let r = this.studentClassList.splice(index, 1);
    this.displayingClassList.splice(index, 1);
    console.log("Recipe Deleted: ", r, "Index: ", index);
    }

  findAllClasses() {
    this.service.findAllClasses().subscribe((classes: Class[]) => {
      console.log(classes);
      window.sessionStorage.setItem('allClasses', JSON.stringify((classes)));
      this.router.navigateByUrl('/globalClass')
    })
  }
}
