import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthResetPasswordV3RoutingModule } from './auth-reset-password-v3-routing.module';
import { AuthResetPasswordV3Component } from './auth-reset-password-v3.component';

@NgModule({
  declarations: [AuthResetPasswordV3Component],
  imports: [CommonModule, AuthResetPasswordV3RoutingModule]
})
export class AuthResetPasswordV3Module {}
