import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FeathericonComponent } from './feathericon/feathericon.component';

@NgModule({
  declarations: [FeathericonComponent],
  imports: [CommonModule, IconsRoutingModule, SharedModule]
})
export class IconsModule {}
