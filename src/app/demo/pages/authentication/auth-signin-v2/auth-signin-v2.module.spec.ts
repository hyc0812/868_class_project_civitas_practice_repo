import { AuthSigninV2Module } from './auth-signin-v2.module';

describe('AuthSigninV2Module', () => {
  let authSigninV2Module: AuthSigninV2Module;

  beforeEach(() => {
    authSigninV2Module = new AuthSigninV2Module();
  });

  it('should create an instance', () => {
    expect(authSigninV2Module).toBeTruthy();
  });
});
