import { StickyActionbarModule } from './sticky-actionbar.module';

describe('CrtAmchartModule', () => {
  let stickyActionbarModule: StickyActionbarModule;

  beforeEach(() => {
    stickyActionbarModule = new StickyActionbarModule();
  });

  it('should create an instance', () => {
    expect(stickyActionbarModule).toBeTruthy();
  });
});
