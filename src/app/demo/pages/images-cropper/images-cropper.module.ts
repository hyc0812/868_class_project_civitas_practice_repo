import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesCropperRoutingModule } from './images-cropper-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ImagesCropperRoutingModule, SharedModule]
})
export class ImagesCropperModule {}
