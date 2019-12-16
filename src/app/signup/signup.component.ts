import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../service/api.service';
import {Student, Teacher} from '../models/app-models';


@NgModule({
  providers: [
    ApiService,
  ]
})

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = '';
  public email;
  public password;
  public fullName;
  public confirm_password;
  public teacher;
  public student;

  constructor(private router: Router, private service: ApiService) {
  }

  ngOnInit() {
  }

  SignUp(event) {
    event.preventDefault();
    const errors = [];
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    const confirm_password = target.querySelector('#confirm_password').value;
    const fullName = target.querySelector('#fullName').value;
    const stuOrTeach = target.querySelector('#st_or_te').value;

    if (password != confirm_password) {
      confirm('Passwords do not match. Try Again.');
      errors.push('Passwords do not match');
    } else if (fullName == '') {
      confirm('Full Name cannot be empty.');
    } else if (email == '') {
      confirm('Email cannot be empty.');
    } else if (password == '') {
      confirm('Password cannot be empty.');
    } else if (stuOrTeach == 'Teacher') {
      this.service.teacherSignUp(fullName, email, password).subscribe((data: Teacher) => {
        this.router.navigateByUrl('');
      });
    } else if (stuOrTeach == 'Student') {
      this.service.studentSignUp(fullName, email, password).subscribe((data: Student) => {
        this.router.navigateByUrl('');
      });
    }
  }
}
