import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSignupV5RoutingModule } from './auth-signup-v5-routing.module';
import { AuthSignupV5Component } from './auth-signup-v5.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [AuthSignupV5Component],
  imports: [CommonModule, AuthSignupV5RoutingModule, FormsModule,
    SweetAlert2Module.forRoot({

    })]
})
export class AuthSignupV5Module {}
