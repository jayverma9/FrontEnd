import {Component, Inject, Input, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {Class, Recipe, Teacher} from '../models/app-models';
import {Subscription} from 'rxjs';
import {InstructorComponent} from '../instructor/instructor.component';

@Component({
  selector: 'app-instructor-recipe-dashboard',
  templateUrl: './instructor-recipe-dashboard.component.html',
  styleUrls: ['./instructor-recipe-dashboard.component.css']
})

export class InstructorRecipeDashboardComponent implements OnInit {
  @Input() teacher: Teacher;
  classs: Class = null;
  private recipes: Recipe[];
  private teacherSubscription: Subscription;

  private classSubscription: Subscription;
  isOpen: boolean;
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.teacherSubscription = this.service.$teacher.subscribe((teacher: Teacher) => {
      this.teacher = teacher;
    });

    if(window.localStorage.getItem('user') != null) {
      this.teacher = JSON.parse(window.localStorage.getItem('user'));
    }
    if(window.sessionStorage.getItem('selectedClass') != null) {
      this.classs = JSON.parse(window.sessionStorage.getItem('selectedClass'))
    }
    else {
      this.classs = this.service.getClass();
      this.recipes = this.classs.recipes;
    }


  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  openDialog() {
  }
}
