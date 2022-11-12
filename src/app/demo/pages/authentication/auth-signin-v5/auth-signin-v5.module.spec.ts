import { AuthSigninV5Module } from './auth-signin-v5.module';

describe('AuthSigninV5Module', () => {
  let authSigninV5Module: AuthSigninV5Module;

  beforeEach(() => {
    authSigninV5Module = new AuthSigninV5Module();
  });

  it('should create an instance', () => {
    expect(authSigninV5Module).toBeTruthy();
  });
});
