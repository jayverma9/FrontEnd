import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs/index';
import {Class, Student, Teacher} from '../models/app-models';
import {toSubscriber} from 'rxjs/internal-compatibility';
import {stringify} from "querystring";

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  public teacher: Teacher = null;
  public $teacher = new Subject<Teacher>();
  public selectedClass : Class;
  constructor(private http: HttpClient) {
  }

  teacherURL: string = 'http://localhost:8080/rest/Teacher/';
  studentURL: string = 'http://localhost:8080/rest/Student/';

  teacherLogin(email, password) {
    // @ts-ignore
    return this.teacher = this.$teacher = this.http.get(this.teacherURL + "login?username=" + email + "&password=" + password);
  }

  teacherSignUp(fullname, email, password){
    return this.http.post(this.teacherURL + "signUp?fullname="+fullname+"&email="+email+"&password="+password, {responseType: Teacher});
  }

  studentLogin(email, password) {
    return this.http.get(this.studentURL + "login?username=" + email + "&password=" + password, {responseType: 'text'});
  }

  studentSignUp(fullname, email, password){
    return this.http.post(this.studentURL + "signUp?fullname="+fullname+"&email="+email+"&password="+password, {responseType: Student});
  }

  setClass(clas: Class) {
    this.selectedClass = clas;
  }

  getClass() : Class {
    return this.selectedClass;
  }

  addNewClass(clase: Class) {
    // @ts-ignore
    console.log(this.http.post(this.teacherURL + "addNewClass", {JSON.stringify(clase)}))
  }
}
