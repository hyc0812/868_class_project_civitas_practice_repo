import { AuthResetPasswordV5Module } from './auth-reset-password-v5.module';

describe('AuthResetPasswordModule', () => {
  let authResetPasswordV5Module: AuthResetPasswordV5Module;

  beforeEach(() => {
    authResetPasswordV5Module = new AuthResetPasswordV5Module();
  });

  it('should create an instance', () => {
    expect(authResetPasswordV5Module).toBeTruthy();
  });
});
