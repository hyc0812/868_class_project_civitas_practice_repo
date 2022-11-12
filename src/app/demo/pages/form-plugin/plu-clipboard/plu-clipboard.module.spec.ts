import { PluClipboardModule } from './plu-clipboard.module';

describe('CrtAmchartModule', () => {
  let pluClipboardModule: PluClipboardModule;

  beforeEach(() => {
    pluClipboardModule = new PluClipboardModule();
  });

  it('should create an instance', () => {
    expect(pluClipboardModule).toBeTruthy();
  });
});
