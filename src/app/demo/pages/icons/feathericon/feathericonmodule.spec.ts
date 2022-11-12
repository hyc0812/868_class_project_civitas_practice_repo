import { FeathericonModule } from './feathericon.module';

describe('CrtAmchartModule', () => {
  let feathericonModule: FeathericonModule;

  beforeEach(() => {
    feathericonModule = new FeathericonModule();
  });

  it('should create an instance', () => {
    expect(feathericonModule).toBeTruthy();
  });
});
