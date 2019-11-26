import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogForCreatingClassComponent} from '../dialog-for-creating-class/dialog-for-creating-class.component';
import {ApiService} from '../service/api.service';
import {Class, Teacher} from '../models/app-models';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})

export class InstructorComponent implements OnInit {
  isOpen: boolean;
  @Input() teacher: Teacher;
  //  private teacher: Teacher;
  @Input() displayingClassList: Class[] = [];

  @Output() public selectedClass = new EventEmitter();
  private teacherSubscription: Subscription;

  ngOnInit() {

  }

  constructor( private dialog: MatDialog, private service: ApiService, private router: Router) {
    this.teacherSubscription = this.service.$teacher.subscribe((teacher: Teacher) => {
      console.log("Came to instructor component");
      this.teacher = teacher;
      this.displayingClassList = Object.assign( this.displayingClassList, this.teacher.classList); /*this.teacher.classList*/;
    });

    if(this.teacher==null && window.localStorage.getItem('user') != null) {
      console.log("in Teacher local storage");
      this.teacher = JSON.parse(window.localStorage.getItem('user'));
    }
  }

  openDialogue(){
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

  funcClassList(class1: Class){

    if(class1 != null){
      console.log(class1);
      // List<Class> k =;
      return ;
    }
    else{
      console.log("All the classes of this teacher are loaded.");
      return this.teacher.classList;
    }
  }

  goToClass(clas: Class) {
    console.log(clas);
    this.service.setClass(clas);
    this.router.navigateByUrl("/instructorDashRecipe")
  }

  searchBar(event){
    event.preventDefault();
    const target = event.target;
    console.log(target.querySelector('#searchBarText').value);
    var searchText = target.querySelector('#searchBarText').value;
    var n = this.teacher.classList.length;

    if(searchText == ""){

      this.displayingClassList = Object.assign(this.displayingClassList, this.teacher.classList);
      // this.displayingClassList = this.teacher.classList.splice(0);
    }
    else {
      while (this.displayingClassList.length > 0) {
        this.displayingClassList.pop();
      }

      for (var i = 0; i < n; i++) {
        var name = this.teacher.classList[i].name;
        if (searchText == name) {
          console.log("is present");
          this.displayingClassList.push(this.teacher.classList[i]);
        }
      }
    }

    // var input, filter, ul, li, a, i, txtValue;
    // filter = input.value.toUpperCase();
    // ul = document.getElementById("myUL");
    // li = ul.getElementsByTagName("li");

    // for (i = 0; i < this.teacher.classList.length; i++) {
    //
    //   // a = li[i].getElementsByTagName("a")[0];
    //   // txtValue = a.textContent || a.innerText;
    //
    //   if (searchText.toUpperCase().indexOf(filter) > -1) {
    //     li[i].style.display = "";
    //   } else {
    //     li[i].style.display = "none";
    //   }
    // }
  }

  deleteClass(deleteClass: Class){

    let i=0;
    while(i<this.teacher.classList.length){
      var index;
      if(deleteClass == this.teacher.classList[i]) {
        index = this.teacher.classList.lastIndexOf(deleteClass);
        break;
      }
      i++;
    }

    let r = this.teacher.classList.splice(i, 1);
    this.displayingClassList.splice(i, 1);
    console.log("Class Deleted: ", r);
  }

  public getSelectedClass() {
    return this.selectedClass;
  }
}
