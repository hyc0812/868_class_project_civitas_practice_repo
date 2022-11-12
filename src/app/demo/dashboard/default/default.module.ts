import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { SharedModule } from '../../../theme/shared/shared.module';
import { DefaultComponent } from './default.component';
import { BasicCarouselModule } from '../../ui-elements/ui-basic/basic-carousel/basic-carousel.module';

@NgModule({
  imports: [CommonModule, DefaultRoutingModule, SharedModule, BasicCarouselModule],
  declarations: [DefaultComponent]
})
export class DefaultModule {}
