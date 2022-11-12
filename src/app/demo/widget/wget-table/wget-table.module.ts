import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WgetTableRoutingModule } from './wget-table-routing.module';
import { WgetTableComponent } from './wget-table.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, WgetTableRoutingModule, SharedModule, NgbNavModule],
  declarations: [WgetTableComponent]
})
export class WgetTableModule {}
