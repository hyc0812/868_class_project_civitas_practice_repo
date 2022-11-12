import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StickyActionbarRoutingModule } from './sticky-actionbar-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { StickyActionbarComponent } from './sticky-actionbar.component';

@NgModule({
  declarations: [StickyActionbarComponent],
  imports: [CommonModule, StickyActionbarRoutingModule, SharedModule]
})
export class StickyActionbarModule {}
