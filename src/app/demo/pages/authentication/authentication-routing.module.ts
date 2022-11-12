import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signup',
        loadChildren: () => import('./auth-signup/auth-signup.module').then((m) => m.AuthSignupModule)
      },
      {
        path: 'signupv2',
        loadChildren: () => import('./auth-signup-v2/auth-signup-v2.module').then((m) => m.AuthSignupV2Module)
      },
      {
        path: 'signupv3',
        loadChildren: () => import('./auth-signup-v3/auth-signup-v3.module').then((m) => m.AuthSignupV3Module)
      },
      {
        path: 'signupv4',
        loadChildren: () => import('./auth-signup-v4/auth-signup-v4.module').then((m) => m.AuthSignupV4Module)
      },
      {
        path: 'signupv5',
        loadChildren: () => import('./auth-signup-v5/auth-signup-v5.module').then((m) => m.AuthSignupV5Module)
      },
      {
        path: 'signin',
        loadChildren: () => import('./auth-signin/auth-signin.module').then((m) => m.AuthSigninModule)
      },
      {
        path: 'signinv2',
        loadChildren: () => import('./auth-signin-v2/auth-signin-v2.module').then((m) => m.AuthSigninV2Module)
      },
      {
        path: 'signinv3',
        loadChildren: () => import('./auth-signin-v3/auth-signin-v3.module').then((m) => m.AuthSigninV3Module)
      },
      {
        path: 'signinv4',
        loadChildren: () => import('./auth-signin-v4/auth-signin-v4.module').then((m) => m.AuthSigninV4Module)
      },
      {
        path: 'signinv5',
        loadChildren: () => import('./auth-signin-v5/auth-signin-v5.module').then((m) => m.AuthSigninV5Module)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./auth-reset-password/auth-reset-password.module').then((m) => m.AuthResetPasswordModule)
      },
      {
        path: 'reset-passwordv2',
        loadChildren: () => import('./auth-reset-password-v2/auth-reset-password-v2.module').then((m) => m.AuthResetPasswordV2Module)
      },
      {
        path: 'reset-passwordv3',
        loadChildren: () => import('./auth-reset-password-v3/auth-reset-password-v3.module').then((m) => m.AuthResetPasswordV3Module)
      },
      {
        path: 'reset-passwordv4',
        loadChildren: () => import('./auth-reset-password-v4/auth-reset-password-v4.module').then((m) => m.AuthResetPasswordV4Module)
      },
      {
        path: 'reset-passwordv5',
        loadChildren: () => import('./auth-reset-password-v5/auth-reset-password-v5.module').then((m) => m.AuthResetPasswordV5Module)
      },
      {
        path: 'change-password',
        loadChildren: () => import('./auth-change-password/auth-change-password.module').then((m) => m.AuthChangePasswordModule)
      },
      {
        path: 'personal-information',
        loadChildren: () => import('./auth-personal-info/auth-personal-info.module').then((m) => m.AuthPersonalInfoModule)
      },
      {
        path: 'profile-settings',
        loadChildren: () => import('./auth-profile-settings/auth-profile-settings.module').then((m) => m.AuthProfileSettingsModule)
      },
      {
        path: 'map-form',
        loadChildren: () => import('./auth-map-form/auth-map-form.module').then((m) => m.AuthMapFormModule)
      },
      {
        path: 'subscribe',
        loadChildren: () => import('./subscribe/subscribe.module').then((m) => m.SubscribeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
