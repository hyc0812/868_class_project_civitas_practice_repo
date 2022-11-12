import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgCropperRoutingModule } from './img-cropper-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FormsModule } from '@angular/forms';
import { ImgCropperComponent } from './img-cropper.component';

@NgModule({
  declarations: [ImgCropperComponent],
  imports: [CommonModule, ImgCropperRoutingModule, SharedModule, ImageCropperModule, FormsModule]
})
export class ImgCropperModule {}
