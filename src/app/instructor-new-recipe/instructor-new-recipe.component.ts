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
    step.innerHTML = '<input type="text" placeholder="Describe Step" class="bg-blue-100 w-6/2 m-2 p-3 rounded text-lg border-4  hover:border-blue-500 text-black">';

    const steps = document.getElementById('steps');
    steps.appendChild(step);
  }

  openDialogUtensils() {
  }

  openDialogGrocery() {

  }

}
