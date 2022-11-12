import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmMulticolumnRoutingModule } from './frm-multicolumn-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FrmMulticolumnComponent } from './frm-multicolumn.component';

@NgModule({
  declarations: [FrmMulticolumnComponent],
  imports: [CommonModule, FrmMulticolumnRoutingModule, SharedModule]
})
export class FrmMulticolumnModule {}
