import { Injectable } from '@angular/core';

export class Message {
  content: string;
  style: string;
  dismisses = false;

  constructor(content, style) {
    this.content = content;
    this.style = style;
  }

}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  getMessages() {

  }

  dismissMessage() {

  }

  sendMessage(message: string, info: string) {

  }
}
