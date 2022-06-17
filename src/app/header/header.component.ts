import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName = 'loading!!!'
  disableLoginButton = true;

  getUserName(){
    return this.userName;
  }

  constructor() {
    setTimeout(() => {
      this.userName = 'Harsh Parecha';
      this.disableLoginButton = false;
    }, 2000)
  }

  ngOnInit(): void {
  }

  disableLoginBtn(){
    this.disableLoginButton = true;
    setTimeout(() => {
      this.disableLoginButton = false;
    }, 2000)
  }

}
