import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.css']
})
export class InstructorDashboardComponent implements OnInit {

  public teach = this.service.teacher;
  isOpen: boolean;
  constructor(private service: ApiService) {
    console.dir(document);
  }

  ngOnInit() {
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

}
