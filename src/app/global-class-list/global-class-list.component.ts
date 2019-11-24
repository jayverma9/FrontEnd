import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-class-list',
  templateUrl: './global-class-list.component.html',
  styleUrls: ['./global-class-list.component.css']
})
export class GlobalClassListComponent implements OnInit {
  private isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }
  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }
}
