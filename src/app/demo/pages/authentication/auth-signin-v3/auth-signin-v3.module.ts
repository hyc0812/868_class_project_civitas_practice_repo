import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSigninV3RoutingModule } from './auth-signin-v3-routing.module';
import { AuthSigninV3Component } from './auth-signin-v3.component';

@NgModule({
  declarations: [AuthSigninV3Component],
  imports: [CommonModule, AuthSigninV3RoutingModule]
})
export class AuthSigninV3Module {}
