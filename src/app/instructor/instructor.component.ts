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

  @Output() public selectedClass= new EventEmitter();
  private teacherSubscription: Subscription;

  ngOnInit() {
    this.teacherSubscription = this.service.$teacher.subscribe((teacher: Teacher) => {
      this.teacher = teacher;
    });

    if(window.localStorage.getItem('user') != null) {
      this.teacher = JSON.parse(window.localStorage.getItem('user'));
    }
  }



  constructor( private dialog: MatDialog, private service: ApiService, private router: Router) {
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
  goToClass(clas: Class) {
    console.log(clas);
    this.service.setClass(clas);
    this.router.navigateByUrl("/instructorDashRecipe")
  }

  public getSelectedClass() {
    return this.selectedClass;
  }
}
