import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSignupV4RoutingModule } from './auth-signup-v4-routing.module';
import { AuthSignupV4Component } from './auth-signup-v4.component';

@NgModule({
  declarations: [AuthSignupV4Component],
  imports: [CommonModule, AuthSignupV4RoutingModule]
})
export class AuthSignupV4Module {}
