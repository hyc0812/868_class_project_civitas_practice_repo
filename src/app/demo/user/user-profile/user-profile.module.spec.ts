import { UserProfileModule } from './user-profile.module';

describe('UiBasicModule', () => {
  let userProfileModule: UserProfileModule;

  beforeEach(() => {
    userProfileModule = new UserProfileModule();
  });

  it('should create an instance', () => {
    expect(UserProfileModule).toBeTruthy();
  });
});
