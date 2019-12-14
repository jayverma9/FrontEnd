import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogForCreatingClassComponent} from '../dialog-for-creating-class/dialog-for-creating-class.component';
import {ApiService} from '../service/api.service';
import {Class, Teacher} from '../models/app-models';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import * as Parallax from 'parallax-js';
import {ToastService} from '../toast.service';
declare var Parallax: any;

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})

export class InstructorComponent implements OnInit {
  isOpen: boolean;
  @Input() teacher: Teacher;
  private teacherClassList: Class[] = [];
  //  private teacher: Teacher;
  @Input() displayingClassList: Class[] = [];

  @Output() public selectedClass = new EventEmitter();
  private teacherSubscription: Subscription;

  ngOnInit() {

  }

  constructor( private dialog: MatDialog, private service: ApiService, private router: Router, private toast: ToastService) {
    this.teacherSubscription = this.service.$teacher.subscribe((teacher: Teacher) => {
      console.log('Came to instructor component');
      this.teacher = teacher;
      this.service.getClassesForTeacher(this.teacher.username).subscribe((classs: Class[]) => {
        this.teacherClassList = classs;
        window.sessionStorage.setItem('teacherClasses', JSON.stringify(this.teacherClassList));
        console.log(classs);
        this.displayingClassList = Object.assign( this.displayingClassList, this.teacherClassList);
      });
    });

    if (this.teacher == null && window.sessionStorage.getItem('user') != null) {
      console.log('in Teacher local storage');
      this.teacher = JSON.parse(window.sessionStorage.getItem('user'));
      this.service.getClassesForTeacher(this.teacher.username).subscribe((classs: Class[]) => {
        this.teacherClassList = classs;
        window.sessionStorage.setItem('teacherClassList', JSON.stringify(this.teacherClassList));
        console.log(classs);
        this.displayingClassList = Object.assign( this.displayingClassList, this.teacherClassList);
      });
    }

    if (window.sessionStorage.getItem('teacherClassList') != null) {
      console.log('in Teacher local storage');
      this.teacherClassList = JSON.parse(window.sessionStorage.getItem('teacherClassList'));
    }
  }

  openDialogue() {
    const dialogRef = this.dialog.open(DialogForCreatingClassComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

//   openDialogueForNewEntry() {
//   // this.dialog.open(InstructorComponent);
//
// }

  funcClassList(class1: Class) {

    if (class1 != null) {
      console.log(class1);
      // List<Class> k =;
      return ;
    } else {
      console.log('All the classes of this teacher are loaded.');
      return this.teacher.classList;
    }
  }

  goToClass(clas: Class) {
    console.log(clas);
    this.service.setClass(clas);
    const classtoaddanimation = document.getElementById('ClassList');
    classtoaddanimation.className = 'animated fadeOutLeft';
    this.router.navigateByUrl('/instructorDashRecipe');
  }

  searchBar(event) {
    event.preventDefault();
    const target = event.target;
    console.log(target.querySelector('#searchBarText').value);
    const searchText = target.querySelector('#searchBarText').value;

    const filter = searchText.toUpperCase();

    // this clears the list
    const l = this.displayingClassList.length;
    this.displayingClassList.splice(0, l);

    // this updates the list in real time.
    for (let i = 0; i < this.teacherClassList.length; i++) {
      const a = this.teacherClassList[i];

      if (a.name.toUpperCase().indexOf(filter) > -1) {
        this.displayingClassList.push(this.teacherClassList[i]);
      }
    }
  }

  deleteClass(deleteClass: Class) {

    let i = 0;
    while (i < this.teacherClassList.length) {
      let index;
      if (deleteClass.name == this.teacherClassList[i].name) {
        index = this.teacherClassList.lastIndexOf(deleteClass);
        break;
      }
      i++;
    }
    this.service.deleteClass(this.teacherClassList[i]).subscribe((data: string) => {
      console.log(data);
    });
    // let r = this.teacherClassList.splice(i, 1);
    // this.displayingClassList.splice(i, 1);
    window.location.reload();
    // console.log("Class Deleted: ", r);
  }

  public getSelectedClass() {
    return this.selectedClass;
  }

  infoMessage() {
  const message = 'yeey !! I am here';
  this.toast.sendMessage(message, 'info');
}

}
