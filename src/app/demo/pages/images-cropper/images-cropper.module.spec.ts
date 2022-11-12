import { ImagesCropperModule } from './images-cropper.module';

describe('CrtAmchartModule', () => {
  let imagesCropperModule: ImagesCropperModule;

  beforeEach(() => {
    imagesCropperModule = new ImagesCropperModule();
  });

  it('should create an instance', () => {
    expect(imagesCropperModule).toBeTruthy();
  });
});
