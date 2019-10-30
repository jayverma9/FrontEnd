import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stu-dash',
  templateUrl: './stu-dash.component.html',
  styleUrls: ['./stu-dash.component.css']
})
export class StuDashComponent implements OnInit {
    isOpen: boolean;
  constructor() { }

  ngOnInit() {
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

}
