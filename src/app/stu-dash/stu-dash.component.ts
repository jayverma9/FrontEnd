import { Component, OnInit } from '@angular/core';
import {DialogForCreatingClassComponent} from '../dialog-for-creating-class/dialog-for-creating-class.component';
import {GlobalClassListDialogComponent} from '../global-class-list-dialog/global-class-list-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-stu-dash',
  templateUrl: './stu-dash.component.html',
  styleUrls: ['./stu-dash.component.css']
})
export class StuDashComponent implements OnInit {
    isOpen: boolean;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  openDialogue() {
    const dialogRef = this.dialog.open(GlobalClassListDialogComponent, {
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
