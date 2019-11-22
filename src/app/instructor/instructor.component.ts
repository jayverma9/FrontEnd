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

  @Output() public selectedClass = new EventEmitter();
  private teacherSubscription: Subscription;

  ngOnInit() {

  }

  constructor( private dialog: MatDialog, private service: ApiService, private router: Router) {
    this.teacherSubscription = this.service.$teacher.subscribe((teacher: Teacher) => {
      console.log("Came to instructor component");
      this.teacher = teacher;
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


  goToClass(clas: Class) {
    console.log(clas);
    this.service.setClass(clas);
    this.router.navigateByUrl("/instructorDashRecipe")
  }

  searchBar(event){
    event.preventDefault();
    const target = event.target;
    console.log(target.querySelector('#searchBarText').value);
    var searchText = target.querySelector('#')
    var n = this.teacher.classList.length;
    for(var i=0; i<n; i++){
      if(searchText == this.teacher.classList[i].name)
        return this.teacher.classList[i];
    }
  }

  public getSelectedClass() {
    return this.selectedClass;
  }
}
