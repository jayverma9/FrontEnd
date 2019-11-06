import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  constructor(private http: HttpClient) {
  }

  teacherURL: string = 'http://localhost:8080/teacher/';
  studentURL: string = 'http://localhost:8080/student/';

  teacherLogin(email, password) {
    return this.http.get(this.teacherURL + "login?username=" + email + "&password=" + password, {responseType: 'text'});
  }

  teacherSignUp(fullname, email, password){
    return this.http.post(this.teacherURL + "signUp?fullname="+fullname+"&email="+email+"&password="+password, {responseType: 'text'});
  }

  studentLogin(email, password) {
    return this.http.get(this.studentURL + "login?username=" + email + "&password=" + password, {responseType: 'text'});
  }

  studentSignUp(fullname, email, password){
    return this.http.post(this.studentURL + "signUp?fullname="+fullname+"&email="+email+"&password="+password, {responseType: 'text'});
  }
}
