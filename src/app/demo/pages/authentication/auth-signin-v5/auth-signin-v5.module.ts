import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSigninV5RoutingModule } from './auth-signin-v5-routing.module';
import { AuthSigninV5Component } from './auth-signin-v5.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthSigninV5Component],
  imports: [CommonModule, AuthSigninV5RoutingModule, FormsModule]
})
export class AuthSigninV5Module {}
