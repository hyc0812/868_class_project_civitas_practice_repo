import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvRangeSliderRoutingModule } from './adv-range-slider-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AdvRangeSliderComponent } from './adv-range-slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [AdvRangeSliderComponent],
  imports: [CommonModule, AdvRangeSliderRoutingModule, SharedModule, NgxSliderModule]
})
export class AdvRangeSliderModule {}
