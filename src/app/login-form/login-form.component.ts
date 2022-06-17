import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor() { }
  userName = '';
  password = '';
  msgBox = true;
  loginText = '';
  loginClass = '';
  ngOnInit(): void {
  }
  
  setUserName(event: any){
    this.userName = (<HTMLInputElement>event.target).value;
  }

  setPassword(event: any){
    this.password = (<HTMLInputElement>event.target).value;
  }

  checkCredentials(){
    if (this.userName == 'Harsh' && this.password == '1234'){
      this.msgBox = false;
      this.loginText = 'Login Successfully'
      this.loginClass = 'success-login'
    }
    else{
      this.msgBox = false;
      this.loginText = 'Login Failed'
      this.loginClass = 'fail-login'
    }
    setTimeout(()=>{
      this.msgBox = true;
    }, 5000)
  }
}
