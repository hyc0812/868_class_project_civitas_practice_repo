import { FormLayoutModule } from './form-layout.module';

describe('CrtAmchartModule', () => {
  let formLayoutModule: FormLayoutModule;

  beforeEach(() => {
    formLayoutModule = new FormLayoutModule();
  });

  it('should create an instance', () => {
    expect(formLayoutModule).toBeTruthy();
  });
});
