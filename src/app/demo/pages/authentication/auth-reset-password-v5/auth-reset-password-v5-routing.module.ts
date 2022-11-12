import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthResetPasswordV5Component } from './auth-reset-password-v5.component';

const routes: Routes = [
  {
    path: '',
    component: AuthResetPasswordV5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthResetPasswordV5RoutingModule {}
