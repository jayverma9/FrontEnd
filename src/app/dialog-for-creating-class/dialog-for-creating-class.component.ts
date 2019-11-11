import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';
import {Class} from '../models/app-models';

@Component({
  selector: 'app-dialog-for-creating-class',
  templateUrl: './dialog-for-creating-class.component.html',
  styleUrls: ['./dialog-for-creating-class.component.css']
})
export class DialogForCreatingClassComponent implements OnInit {

  constructor(private service: ApiService) { }

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
    this.service.addNewClass(clase);


  }
}
