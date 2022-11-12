import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleReCaptchaComponent } from './google-re-captcha.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleReCaptchaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleReCaptchaRoutingModule {}
