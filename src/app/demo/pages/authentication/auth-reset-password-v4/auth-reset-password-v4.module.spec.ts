import { AuthResetPasswordV4Module } from './auth-reset-password-v4.module';

describe('AuthResetPasswordModule', () => {
  let authResetPasswordV4Module: AuthResetPasswordV4Module;

  beforeEach(() => {
    authResetPasswordV4Module = new AuthResetPasswordV4Module();
  });

  it('should create an instance', () => {
    expect(authResetPasswordV4Module).toBeTruthy();
  });
});
