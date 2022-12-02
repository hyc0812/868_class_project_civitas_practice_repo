import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSignupV5RoutingModule } from './auth-signup-v5-routing.module';
import { AuthSignupV5Component } from './auth-signup-v5.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthSignupV5Component],
  imports: [CommonModule, AuthSignupV5RoutingModule, FormsModule]
})
export class AuthSignupV5Module {}
