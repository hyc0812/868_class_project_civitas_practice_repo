import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';

import { GoogleReCaptchaComponent } from './google-re-captcha.component';
import { GoogleReCaptchaRoutingModule } from './google-re-captcha-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [GoogleReCaptchaComponent],
  imports: [CommonModule, GoogleReCaptchaRoutingModule, RecaptchaModule, FormsModule, SharedModule, RecaptchaFormsModule]
})
export class GoogleReCaptchaModule {}
