import { FrmLayoutModule } from './frm-layout.module';

describe('CrtAmchartModule', () => {
  let frmLayoutModule: FrmLayoutModule;

  beforeEach(() => {
    frmLayoutModule = new FrmLayoutModule();
  });

  it('should create an instance', () => {
    expect(frmLayoutModule).toBeTruthy();
  });
});
