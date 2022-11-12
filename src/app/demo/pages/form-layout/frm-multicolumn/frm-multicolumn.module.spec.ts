import { FrmMulticolumnModule } from './frm-multicolumn.module';

describe('CrtAmchartModule', () => {
  let frmMulticolumnModule: FrmMulticolumnModule;

  beforeEach(() => {
    frmMulticolumnModule = new FrmMulticolumnModule();
  });

  it('should create an instance', () => {
    expect(frmMulticolumnModule).toBeTruthy();
  });
});
