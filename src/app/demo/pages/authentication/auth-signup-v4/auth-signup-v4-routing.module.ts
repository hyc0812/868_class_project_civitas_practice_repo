import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSignupV4Component } from './auth-signup-v4.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSignupV4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSignupV4RoutingModule {}
