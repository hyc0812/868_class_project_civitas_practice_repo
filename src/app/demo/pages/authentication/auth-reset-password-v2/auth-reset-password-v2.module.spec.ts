import { AuthResetPasswordV2Module } from './auth-reset-password-v2.module';

describe('AuthResetPasswordModule', () => {
  let authResetPasswordV2Module: AuthResetPasswordV2Module;

  beforeEach(() => {
    authResetPasswordV2Module = new AuthResetPasswordV2Module();
  });

  it('should create an instance', () => {
    expect(authResetPasswordV2Module).toBeTruthy();
  });
});
