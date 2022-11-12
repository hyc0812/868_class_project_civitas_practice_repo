import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthResetPasswordV5RoutingModule } from './auth-reset-password-v5-routing.module';
import { AuthResetPasswordV5Component } from './auth-reset-password-v5.component';

@NgModule({
  declarations: [AuthResetPasswordV5Component],
  imports: [CommonModule, AuthResetPasswordV5RoutingModule]
})
export class AuthResetPasswordV5Module {}
