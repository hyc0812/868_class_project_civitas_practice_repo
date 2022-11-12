import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-re-captcha',
  templateUrl: './google-re-captcha.component.html',
  styleUrls: ['./google-re-captcha.component.scss']
})
export class GoogleReCaptchaComponent implements OnInit {
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  captcha?: string;
  public formModel: FormModel = {};

  constructor() {}

  ngOnInit(): void {}
}

export interface FormModel {
  captcha?: string;
}
