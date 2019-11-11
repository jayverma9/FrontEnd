import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-instructor-new-recipe',
  templateUrl: './instructor-new-recipe.component.html',
  styleUrls: ['./instructor-new-recipe.component.css']
})
export class InstructorNewRecipeComponent implements OnInit {

  isOpen: boolean;

  public teach = this.service.teacher;

  constructor(private service: ApiService) {
  }

  ngOnInit() {
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  addStep() {

    const step = document.createElement('div');
    step.innerHTML = '<label for="step-des">Describe Step</label>\n' +
      '      <input id="step-des">\n' +
      '      <select>\n' +
      '      </select>\n' +
      '      <select></select>\n' +
      '      <select></select>\n' +
      '      <select></select>\n' +
      '      <input>';

    const steps = document.getElementById('steps');
    steps.appendChild(step);
  }

  openDialogUtensils() {
  }

  openDialogGrocery() {

  }

}
