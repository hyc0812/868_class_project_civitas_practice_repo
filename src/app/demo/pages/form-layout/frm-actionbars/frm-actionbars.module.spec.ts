import { FrmActionbarsModule } from './frm-actionbars.module';

describe('CrtAmchartModule', () => {
  let frmActionbarsModule: FrmActionbarsModule;

  beforeEach(() => {
    frmActionbarsModule = new FrmActionbarsModule();
  });

  it('should create an instance', () => {
    expect(frmActionbarsModule).toBeTruthy();
  });
});
