import { FormPluginModule } from './form-plugin.module';

describe('LandingModule', () => {
  let formPluginModule: FormPluginModule;

  beforeEach(() => {
    formPluginModule = new FormPluginModule();
  });

  it('should create an instance', () => {
    expect(formPluginModule).toBeTruthy();
  });
});
