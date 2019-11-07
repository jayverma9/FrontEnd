import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-recipe-dashboard',
  templateUrl: './instructor-recipe-dashboard.component.html',
  styleUrls: ['./instructor-recipe-dashboard.component.css']
})
export class InstructorRecipeDashboardComponent implements OnInit {

  isOpen: boolean;
  constructor() { }

  ngOnInit() {
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  openDialog() {
  }
}
