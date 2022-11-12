import { AdvDatepickerModule } from './adv-datepicker.module';

describe('SamplePageModule', () => {
  let advDatepickerModule: AdvDatepickerModule;

  beforeEach(() => {
    advDatepickerModule = new AdvDatepickerModule();
  });

  it('should create an instance', () => {
    expect(advDatepickerModule).toBeTruthy();
  });
});
