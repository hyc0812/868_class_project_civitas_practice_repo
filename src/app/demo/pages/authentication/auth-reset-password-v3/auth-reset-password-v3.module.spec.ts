import { AuthResetPasswordV3Module } from './auth-reset-password-v3.module';

describe('AuthResetPasswordModule', () => {
  let authResetPasswordV3Module: AuthResetPasswordV3Module;

  beforeEach(() => {
    authResetPasswordV3Module = new AuthResetPasswordV3Module();
  });

  it('should create an instance', () => {
    expect(authResetPasswordV3Module).toBeTruthy();
  });
});
