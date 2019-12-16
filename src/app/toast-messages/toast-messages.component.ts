import { Component, OnInit } from '@angular/core';
import {ToastService} from '../toast.service';

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.css']
})
export class ToastMessagesComponent implements OnInit {
  message: any;

  constructor(private toast: ToastService) { }

  ngOnInit() {
    this.message = this.toast.getMessages();
  }

  dismiss(item)
  {
    this.toast.dismissMessage();
  }

}
