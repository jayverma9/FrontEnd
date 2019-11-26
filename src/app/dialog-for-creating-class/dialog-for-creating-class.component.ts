import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {Class, Teacher} from '../models/app-models';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dialog-for-creating-class',
  templateUrl: './dialog-for-creating-class.component.html',
  styleUrls: ['./dialog-for-creating-class.component.css']
})
export class DialogForCreatingClassComponent implements OnInit {
  private teacherSubscription: Subscription;
  @Input() private teacher: Teacher;

  constructor(private service: ApiService,private router: Router) {
    this.teacherSubscription = this.service.$teacher.subscribe((teacher: Teacher) => {
      this.teacher = teacher;
    });

    if(this.teacher==null && window.localStorage.getItem('user') != null) {
      console.log("in Teacher local storage");
      this.teacher = JSON.parse(window.localStorage.getItem('user'));
    }
  }

  ngOnInit() {

  }

  onNewClass(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.querySelector('#name').value;
    const description = target.querySelector('#description').value;
    let clase: Class = new Class();
    clase.name = name;
    clase.description = description;
    console.log(this.teacher.classList);
    this.teacher.classList.push(clase);
    this.service.setTeacher(this.teacher);
    this.service.addNewClass(clase).subscribe((data: String) => {
      console.log(data);
    });

    window.location.reload();


  }
}
