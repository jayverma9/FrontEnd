import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  dropdownShowOrNot() {
    this.isOpen = !this.isOpen;
  }

  public signOut() {
    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('student');
    this.router.navigateByUrl('');
  }
}
