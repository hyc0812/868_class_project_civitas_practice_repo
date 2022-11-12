import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'recaptcha',
        loadChildren: () => import('./google-re-captcha/google-re-captcha.module').then((m) => m.GoogleReCaptchaModule)
      },
      {
        path: 'clipboard',
        loadChildren: () => import('./plu-clipboard/plu-clipboard.module').then((m) => m.PluClipboardModule)
      },
      {
        path: 'switch',
        loadChildren: () => import('./switch/switch.module').then((m) => m.SwitchModule)
      },
      {
        path: 'typeahead',
        loadChildren: () => import('./typeahead/typeahead.module').then((m) => m.TypeaheadModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormPluginRoutingModule {}
