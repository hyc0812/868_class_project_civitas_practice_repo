import { AuthSignupV5Module } from './auth-signup-v5.module';

describe('AuthSignupV5Module', () => {
  let authSignupV5Module: AuthSignupV5Module;

  beforeEach(() => {
    authSignupV5Module = new AuthSignupV5Module();
  });

  it('should create an instance', () => {
    expect(authSignupV5Module).toBeTruthy();
  });
});
