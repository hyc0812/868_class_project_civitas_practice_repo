import { AuthSigninV4Module } from './auth-signin-v4.module';

describe('AuthSigninV4Module', () => {
  let authSigninV4Module: AuthSigninV4Module;

  beforeEach(() => {
    authSigninV4Module = new AuthSigninV4Module();
  });

  it('should create an instance', () => {
    expect(authSigninV4Module).toBeTruthy();
  });
});
