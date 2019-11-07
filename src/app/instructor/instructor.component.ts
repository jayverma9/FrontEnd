import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogForCreatingClassComponent} from '../dialog-for-creating-class/dialog-for-creating-class.component';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  isOpen: boolean;
  image: string;
  heading: string;
  description: string;

  constructor( private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogForCreatingClassComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

//   openDialogueForNewEntry() {
//   // this.dialog.open(InstructorComponent);
//
// }
}
