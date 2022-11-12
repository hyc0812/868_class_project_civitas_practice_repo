import { AuthSignupV3Module } from './auth-signup-v3.module';

describe('AuthSignupV3Module', () => {
  let authSignupV3Module: AuthSignupV3Module;

  beforeEach(() => {
    authSignupV3Module = new AuthSignupV3Module();
  });

  it('should create an instance', () => {
    expect(authSignupV3Module).toBeTruthy();
  });
});
