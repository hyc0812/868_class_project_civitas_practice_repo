import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SignInUser } from './SignInUserInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signin-v5',
  templateUrl: './auth-signin-v5.component.html',
  styleUrls: ['./auth-signin-v5.component.scss']
})
export class AuthSigninV5Component implements OnInit {

  signInUser = new SignInUser(12, 'Prakhyat@gmail1.com', '1234567890', false);

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    console.log(this.signInUser)
  }

  signUpAlert() {
    Swal.fire({
      title: 'Welcome!',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    }).then((isOkay) => {
      if (isOkay){
        this.onSubmit;
        this.router.navigate(['dashboard/profile']);
      }
    }
    );
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
