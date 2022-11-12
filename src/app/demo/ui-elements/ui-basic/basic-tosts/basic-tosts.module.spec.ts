import { BasicTostsModule } from './basic-tosts.module';

describe('BasicTabsPillsModule', () => {
  let basicTostsModule: BasicTostsModule;

  beforeEach(() => {
    basicTostsModule = new BasicTostsModule();
  });

  it('should create an instance', () => {
    expect(basicTostsModule).toBeTruthy();
  });
});
