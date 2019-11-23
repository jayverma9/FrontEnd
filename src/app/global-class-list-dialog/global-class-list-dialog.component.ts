import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-class-list-dialog',
  templateUrl: './global-class-list-dialog.component.html',
  styleUrls: ['./global-class-list-dialog.component.css']
})
export class GlobalClassListDialogComponent implements OnInit {
  private isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }
  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

}
