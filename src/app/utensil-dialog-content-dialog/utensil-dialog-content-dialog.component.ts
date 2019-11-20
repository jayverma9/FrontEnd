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

  constructor(private service: ApiService) {

  }

  ngOnInit() {
    this.utensilSubscription = this.service.$utensils.subscribe((utensils : Utensil[]) => {
      this.allUtensils = utensils;
    });
  }

  selectedUten(utensil: Utensil) {
    this.utensilsSelected.push(utensil);
     this.allUtensils = this.allUtensils.filter(function(value, index, arr){
      return value != utensil;
    });
     this.service.setUtensils(this.utensilsSelected);
  }
}