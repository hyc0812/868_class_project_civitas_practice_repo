import { UserModule } from './user.module';

describe('UiBasicModule', () => {
  let userModule: UserModule;

  beforeEach(() => {
    userModule = new UserModule();
  });

  it('should create an instance', () => {
    expect(UserModule).toBeTruthy();
  });
});
