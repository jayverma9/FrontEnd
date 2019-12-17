import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utensils-popup-dialog',
  templateUrl: './utensils-popup-dialog.component.html',
  styleUrls: ['./utensils-popup-dialog.component.css']
})
export class UtensilsPopupDialogComponent implements OnInit {
  utensil: any;

  constructor() { }

  ngOnInit() {
    this.utensil = window.sessionStorage.getItem('nameforpopupUtensil');
  }

}
