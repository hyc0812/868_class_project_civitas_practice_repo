import { BasicSpinnerModule } from './basic-spinner.module';

describe('BasicTabsPillsModule', () => {
  let basicSpinnerModule: BasicSpinnerModule;

  beforeEach(() => {
    basicSpinnerModule = new BasicSpinnerModule();
  });

  it('should create an instance', () => {
    expect(basicSpinnerModule).toBeTruthy();
  });
});
