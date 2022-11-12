import { AdvTreeviewModule } from './adv-treeview.module';

describe('AdvTreeviewModule', () => {
  let advTreeviewModule: AdvTreeviewModule;

  beforeEach(() => {
    advTreeviewModule = new AdvTreeviewModule();
  });

  it('should create an instance', () => {
    expect(advTreeviewModule).toBeTruthy();
  });
});
