import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthResetPasswordV3Component } from './auth-reset-password-v3.component';

const routes: Routes = [
  {
    path: '',
    component: AuthResetPasswordV3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthResetPasswordV3RoutingModule {}
