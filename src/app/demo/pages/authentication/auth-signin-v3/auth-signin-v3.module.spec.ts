import { AuthSigninV3Module } from './auth-signin-v3.module';

describe('AuthSigninV3Module', () => {
  let authSigninV3Module: AuthSigninV3Module;

  beforeEach(() => {
    authSigninV3Module = new AuthSigninV3Module();
  });

  it('should create an instance', () => {
    expect(authSigninV3Module).toBeTruthy();
  });
});
