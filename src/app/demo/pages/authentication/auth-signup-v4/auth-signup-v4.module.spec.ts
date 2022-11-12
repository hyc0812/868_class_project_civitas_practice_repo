import { AuthSignupV4Module } from './auth-signup-v4.module';

describe('AuthSignupV4Module', () => {
  let authSignupV4Module: AuthSignupV4Module;

  beforeEach(() => {
    authSignupV4Module = new AuthSignupV4Module();
  });

  it('should create an instance', () => {
    expect(authSignupV4Module).toBeTruthy();
  });
});
