import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSignupV5RoutingModule } from './auth-signup-v5-routing.module';
import { AuthSignupV5Component } from './auth-signup-v5.component';

@NgModule({
  declarations: [AuthSignupV5Component],
  imports: [CommonModule, AuthSignupV5RoutingModule]
})
export class AuthSignupV5Module {}
