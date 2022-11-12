import { GoogleReCaptchaModule } from './google-re-captcha.module';

describe('CrtAmchartModule', () => {
  let googleReCaptchaModule: GoogleReCaptchaModule;

  beforeEach(() => {
    googleReCaptchaModule = new GoogleReCaptchaModule();
  });

  it('should create an instance', () => {
    expect(googleReCaptchaModule).toBeTruthy();
  });
});
