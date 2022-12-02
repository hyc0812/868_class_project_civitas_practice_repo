import { Component, OnInit } from '@angular/core';
import { SignUpUser } from './signUpUserInterface';

@Component({
  selector: 'app-auth-signup-v5',
  templateUrl: './auth-signup-v5.component.html',
  styleUrls: ['./auth-signup-v5.component.scss']
})


export class AuthSignupV5Component implements OnInit {

  newUser = new SignUpUser(12, '', '', '', '', false );

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    console.log(this.newUser)
  }

  constructor() {}

  ngOnInit(): void {}
}
