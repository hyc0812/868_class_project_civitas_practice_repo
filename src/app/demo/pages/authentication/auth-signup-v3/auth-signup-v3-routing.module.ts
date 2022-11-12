import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSignupV3Component } from './auth-signup-v3.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSignupV3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSignupV3RoutingModule {}
