import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SignUpUser } from './signUpUserInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup-v5',
  templateUrl: './auth-signup-v5.component.html',
  styleUrls: ['./auth-signup-v5.component.scss']
})


export class AuthSignupV5Component implements OnInit {

  newUser = new SignUpUser(12, 'Prakhyat@gmail1.com', 'Prakhyat', 'Jade', '123456789012', false );

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    console.log(this.newUser)
  }

  signUpAlert() {
    Swal.fire({
      title: 'Congrates!',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    }).then((isOkay) => {
      if (isOkay){
        this.onSubmit;
        this.router.navigate(['dashboard/default']);
      }
    }
    );
  }


  constructor(private router: Router) {}

  ngOnInit(): void {}
}
