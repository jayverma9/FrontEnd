import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'new-recipe',
  templateUrl: './new-recipe.component.html',
})
export class NewRecipeComponent implements OnInit {
  isOpen: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  addStep() {

    let step = document.createElement('div');
    step.innerHTML = '<label for="step-des">Describe Step</label>\n' +
      '      <input id="step-des">\n' +
      '      <select>\n' +
      '      </select>\n' +
      '      <select></select>\n' +
      '      <select></select>\n' +
      '      <select></select>\n' +
      '      <input>';

    let steps = document.getElementById('steps');
    steps.appendChild(step);
  }
}
