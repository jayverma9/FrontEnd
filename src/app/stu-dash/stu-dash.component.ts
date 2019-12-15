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
    if (window.sessionStorage.getItem('student') != null) {
      console.log('in Student local storage');
      this.student = JSON.parse(window.sessionStorage.getItem('student'));
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
    window.sessionStorage.setItem('selectedClass', JSON.stringify(clas));
    this.router.navigateByUrl('/studentDashRecipe');
  }

  searchBarClass(event) {

    event.preventDefault();
    const target = event.target;
    console.log(target.querySelector('#searchBarText').value);
    const searchText = target.querySelector('#searchBarText').value;
    const filter = searchText.toUpperCase();
    const l = this.displayingClassList.length;
    this.displayingClassList.splice(0, l);

    // this updates the list in real time.
    for (let i = 0; i < this.studentClassList.length; i++) {
      const a = this.studentClassList[i];

      if (a.name.toUpperCase().indexOf(filter) > -1) {
        this.displayingClassList.push(this.studentClassList[i]);
      }
    }
 }

  deleteClass(event, deleteClass: Class) {
    const index = this.studentClassList.lastIndexOf(deleteClass);
    //const value = event.target.querySelector('#' + index);
    //console.log('bruh', value);
    // value.className = "overflow-hidden rounded-lg shadow-lg transition-all transition-ease-out hover:shadow-2xl animated zoomOut";

    // tslint:disable-next-line:max-line-length
    document.getElementById(index.toString()).className = 'overflow-hidden rounded-lg shadow-lg transition-all transition-ease-out hover:shadow-2xl zoomOut';

    let i = this.studentClassList[index].students.indexOf(this.student.username);
    this.studentClassList[index].students.splice(i, 1);
    this.service.updateStudentsinClass(this.studentClassList[index]).subscribe( (data: String) => {
      console.log(data);
    });
    window.location.reload();
    // const r = this.studentClassList.splice(index, 1);
    // this.displayingClassList.splice(index, 1);
    // console.log('Recipe Deleted: ', r, 'Index: ', index);
    }

  findAllClasses() {
    this.service.findAllClasses().subscribe((classes: Class[]) => {
      console.log(classes);
      window.sessionStorage.setItem('allClasses', JSON.stringify((classes)));
      this.router.navigateByUrl('/globalClass');
    });
  }
}
