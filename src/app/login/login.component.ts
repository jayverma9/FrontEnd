import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '';
  public email;
  public password;
  public fullName;
  constructor(private router: Router, private service: ApiService) { }

  ngOnInit() {
  }

  setAsTeacher() {
    this.user = 'teacher';
  }
  setAsStudent() {
    this.user = 'student';
  }

  teacherLogin(event) {
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    let Data: boolean = false;

    this.service.teacherLogin(email, password).subscribe((data: string) => {
      if(data=="true") {
        Data = true;
      }

      if(Data==false) {
        confirm("Email and Password combination is wrong. Try Again.")
      }
      else
        this.router.navigateByUrl("/instructor")
    });

  }


  studentLogin(event) {
    const target = event.target;
    const email = target.querySelector('#stemail').value;
    const password = target.querySelector('#stpassword').value;
    let Data: boolean = false;

    this.service.studentLogin(email, password).subscribe((data: string) => {
      if(data=="true") {
        Data = true;
      }

      if(Data==false) {
        confirm("Email and Password combination is wrong. Try Again.")
      }
      else
        this.router.navigateByUrl("/studentDashboard")
    });
  }

}
