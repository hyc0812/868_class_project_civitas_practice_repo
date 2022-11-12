import { ImgCropperModule } from './img-cropper.module';

describe('CrtAmchartModule', () => {
  let imgCropperModule: ImgCropperModule;

  beforeEach(() => {
    imgCropperModule = new ImgCropperModule();
  });

  it('should create an instance', () => {
    expect(imgCropperModule).toBeTruthy();
  });
});
