import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-student-dashbard',
  templateUrl: './student-dashbard.component.html',
  styleUrls: ['./student-dashbard.component.css']
})
export class StudentDashbardComponent implements OnInit {
  constructor() { }
  isOpen: boolean;

  fruits = [
    'Strawberry',
    'Apple',
    'Banana',
    'Apricots',
    'Mango',
    'Orange',
  ];

  workspace = [
    'Tomtoes'
  ];

  ngOnInit() {
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
