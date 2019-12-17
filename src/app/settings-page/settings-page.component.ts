import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {
  userorstudent: string;

  constructor() {
    if (window.sessionStorage.getItem('user') != null) {
      this.userorstudent = '/instructor';
    }

    else if (window.sessionStorage.getItem('student') != null) {
      this.userorstudent = '/stuDash';    }

  }

  ngOnInit() {

  }

}
