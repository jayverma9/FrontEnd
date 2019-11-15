import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs/index';
import {Class, Ingredient, Recipe, Student, Teacher, Utensil} from '../models/app-models';
import {toSubscriber} from 'rxjs/internal-compatibility';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  public teacher: Teacher = null;
  public $teacher = new Subject<Teacher>();

  public $ingredients = new Subject<Ingredient[]>();
  public $utensils = new Subject<Utensil[]>();

  public selectedClass : Class;
  public selectedUtensils: Utensil[];
  public selectedIngredients: Ingredient[];


  constructor(private http: HttpClient) {
  }

  teacherURL: string = 'http://localhost:8080/rest/Teacher/';
  studentURL: string = 'http://localhost:8080/rest/Student/';
  ingredientURL: string = 'http://localhost:8080/rest/Ingredient/';
  utensilURL: string = 'http://localhost:8080/rest/Utensil/';
  recipeURL: string = 'http://localhost:8080/rest/Recipe/';

  teacherLogin(email, password) {
    // @ts-ignore
    return this.teacher = this.$teacher = this.http.get(this.teacherURL + "login?username=" + email + "&password=" + password);
  }

  setTeacher(teacher: Teacher) {
    this.postTeacher(teacher).subscribe((data: string) => {
      console.log(data);
    });
    this.teacherLogin(teacher.username, teacher.password).subscribe(((data: Teacher) => {
      console.log(teacher);
    }));
  }

  postTeacher(teacher: Teacher) {
    return this.http.post(this.teacherURL + "updateTeacher", JSON.stringify(teacher));
  }

  teacherSignUp(fullname, email, password){
    return this.http.post(this.teacherURL + "signUp?fullname="+fullname+"&email="+email+"&password="+password, {responseType: Teacher});
  }

  studentLogin(email, password) {
    return this.http.get(this.studentURL + "login?username=" + email + "&password=" + password);
  }

  studentSignUp(fullname, email, password){
    return this.http.post(this.studentURL + "signUp?fullname="+fullname+"&email="+email+"&password="+password, {responseType: Student});
  }

  addNewClass(clase: Class) {
    return this.http.post(this.teacherURL + "addNewClass", JSON.stringify(clase))
  }

  getUtensils() {
    // @ts-ignore
    this.$utensils = this.http.get(this.utensilURL + "utensils");
  }

  getIngredients() {
    // @ts-ignore
    this.$ingredients = this.http.get(this.ingredientURL + "ingredients");
  }

  setClass(clas: Class) {
    window.sessionStorage.setItem('selectedClass', JSON.stringify(clas));
    this.selectedClass = clas;
  }

  getClass() : Class {
    return this.selectedClass;
  }

  setUtensils(utensils: Utensil[]) {
    window.sessionStorage.setItem('selectedClass', JSON.stringify(utensils));
    this.selectedUtensils = utensils;
  }

  getSelectedUtensils() : Utensil[] {
    return this.selectedUtensils;
  }

  setIngredients(ingredients: Ingredient[]) {
    window.sessionStorage.setItem('selectedClass', JSON.stringify(ingredients));
    this.selectedIngredients = ingredients;
  }

  getSelectedIngredients() : Ingredient[] {
    return this.selectedIngredients;
  }

  addNewRecipe(recipe: Recipe) {
    console.log(recipe);
    return this.http.post(this.recipeURL + "addNewRecipe", JSON.stringify(recipe));

  }
}
