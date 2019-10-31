import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashbard',
  templateUrl: './student-dashbard.component.html',
  styleUrls: ['./student-dashbard.component.css']
})
export class StudentDashbardComponent implements OnInit {
  isOpen: boolean;
  constructor() { }

  ngOnInit() {
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }
}
