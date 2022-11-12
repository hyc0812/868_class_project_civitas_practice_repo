import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmActionbarsRoutingModule } from './frm-actionbars-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FrmActionbarsComponent } from './frm-actionbars.component';

@NgModule({
  declarations: [FrmActionbarsComponent],
  imports: [CommonModule, FrmActionbarsRoutingModule, SharedModule]
})
export class FrmActionbarsModule {}
