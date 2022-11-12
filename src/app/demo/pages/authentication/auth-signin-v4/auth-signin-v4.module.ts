import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSigninV4RoutingModule } from './auth-signin-v4-routing.module';
import { AuthSigninV4Component } from './auth-signin-v4.component';

@NgModule({
  declarations: [AuthSigninV4Component],
  imports: [CommonModule, AuthSigninV4RoutingModule]
})
export class AuthSigninV4Module {}
