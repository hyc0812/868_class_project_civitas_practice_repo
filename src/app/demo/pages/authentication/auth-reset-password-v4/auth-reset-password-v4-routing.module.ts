import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthResetPasswordV4Component } from './auth-reset-password-v4.component';

const routes: Routes = [
  {
    path: '',
    component: AuthResetPasswordV4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthResetPasswordV4RoutingModule {}
