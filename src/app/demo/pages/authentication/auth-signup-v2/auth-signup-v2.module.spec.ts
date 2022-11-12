import { AuthSignupV2Module } from './auth-signup-v2.module';

describe('AuthSignupV2Module', () => {
  let authSignupV2Module: AuthSignupV2Module;

  beforeEach(() => {
    authSignupV2Module = new AuthSignupV2Module();
  });

  it('should create an instance', () => {
    expect(authSignupV2Module).toBeTruthy();
  });
});
