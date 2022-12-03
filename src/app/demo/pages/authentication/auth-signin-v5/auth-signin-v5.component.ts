import { Component, OnInit } from '@angular/core';
import { SignInUser } from './SignInUserInterface';

@Component({
  selector: 'app-auth-signin-v5',
  templateUrl: './auth-signin-v5.component.html',
  styleUrls: ['./auth-signin-v5.component.scss']
})
export class AuthSigninV5Component implements OnInit {

  signInUser = new SignInUser(12, '', '', false);

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    console.log(this.signInUser)
  }

  constructor() {}

  ngOnInit(): void {}
}
