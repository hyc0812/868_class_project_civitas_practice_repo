import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmLayoutRoutingModule } from './frm-layout-routing.module';
import { FrmLayoutComponent } from './frm-layout.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [FrmLayoutComponent],
  imports: [CommonModule, FrmLayoutRoutingModule, SharedModule]
})
export class FrmLayoutModule {}
