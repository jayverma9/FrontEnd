import { Component, OnInit } from '@angular/core';
import {Class, Student} from '../models/app-models';
import {ApiService} from '../service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-global-class-list',
  templateUrl: './global-class-list.component.html',
  styleUrls: ['./global-class-list.component.css']
})
export class GlobalClassListComponent implements OnInit {
  private isOpen: boolean;

  private classesList: Class[];

  constructor(private service: ApiService, private router: Router) {
    if(this.classesList == null && window.sessionStorage.getItem('allClasses') != null) {
      this.classesList = JSON.parse(window.sessionStorage.getItem('allClasses'))
    }
  }

  ngOnInit() {
  }
  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  subscribeHandler(classe: Class) {
    let student: Student = JSON.parse(window.sessionStorage.getItem('student'));
    if(!classe.students.includes(student.username)){
      classe.students.push(student.username);
      this.service.updateStudentsinClass(classe).subscribe( (data: String) =>
      {
        console.log(data);
      });
      this.router.navigateByUrl('/stuDash');
    }

  }
}
