import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSignupV3RoutingModule } from './auth-signup-v3-routing.module';
import { AuthSignupV3Component } from './auth-signup-v3.component';

@NgModule({
  declarations: [AuthSignupV3Component],
  imports: [CommonModule, AuthSignupV3RoutingModule]
})
export class AuthSignupV3Module {}
