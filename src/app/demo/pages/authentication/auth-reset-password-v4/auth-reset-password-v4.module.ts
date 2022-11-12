import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthResetPasswordV4RoutingModule } from './auth-reset-password-v4-routing.module';
import { AuthResetPasswordV4Component } from './auth-reset-password-v4.component';

@NgModule({
  declarations: [AuthResetPasswordV4Component],
  imports: [CommonModule, AuthResetPasswordV4RoutingModule]
})
export class AuthResetPasswordV4Module {}
