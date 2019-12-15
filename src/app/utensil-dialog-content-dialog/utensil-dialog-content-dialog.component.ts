import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Utensil} from '../models/app-models';
import {ApiService} from '../service/api.service';


@Component({
  selector: 'app-utensil-dialog-content-dialog',
  templateUrl: './utensil-dialog-content-dialog.component.html',
  styleUrls: ['./utensil-dialog-content-dialog.component.css']
})
export class UtensilDialogContentDialogComponent implements OnInit {
  public utensilSubscription: Subscription;
  public utensilsSelected: Utensil[] = [];
  public allUtensils: Utensil[] = [];
  public displayingUtensils: Utensil[] = [];
  centered = false;
  disabled = false;
  unbounded = false;
  radius: number;
  color: string;
  public selectedNumber = 0;
  hideseconddiv: boolean;
  value: String = "";

  constructor(private service: ApiService) {
  }

  ngOnInit() {
    this.utensilSubscription = this.service.$utensils.subscribe((utensils: Utensil[]) => {
      this.allUtensils = utensils;
      this.displayingUtensils = Object.assign(this.displayingUtensils, this.allUtensils);
    });
    if (this.service.getSelectedUtensils() != undefined) {
      this.utensilsSelected = this.service.getSelectedUtensils();

    }
  }

  selectedUten(utensil: Utensil) {
    this.selectedNumber++;

    this.utensilsSelected.push(utensil);
    // tslint:disable-next-line:only-arrow-functions
    this.allUtensils = this.allUtensils.filter(function(value, index, arr) {
      return value !== utensil;
    });
    this.service.setUtensils(this.utensilsSelected);
  }
  updateNumbers() {
    window.sessionStorage.setItem('utensilsAmount', String(this.selectedNumber));
  }

  deleteSpecificUtensils(i: number) {

    const divcontainer = document.getElementById('utensil' + i);
    const second = document.getElementById('utensil' + i + i);
    const third = document.getElementById('utensil' + i + i + i);

    for ( let j = 0; j < this.utensilsSelected.length; j++) {

      if ( this.utensilsSelected[j].name === third.attributes.getNamedItem('ng-reflect-value').value) {
        this.utensilsSelected.splice(j, 1);
      }
    }

    divcontainer.remove();


  }

  search(event) {
    let searchText = this.value;
    console.log('serachText = ' + this.value);

    const n = this.allUtensils.length;

    const filter = searchText.toUpperCase();
    console.log(filter);
    // this clears the list
    const l = this.displayingUtensils.length;
    this.displayingUtensils.splice(0, l);

    // this updates the list in real time.
    for (let i = 0; i < this.allUtensils.length; i++) {
      const a = this.allUtensils[i];

      if (a.name.toUpperCase().indexOf(filter) > -1) {
        this.displayingUtensils.push(this.allUtensils[i]);
      }
    }
  }
}
