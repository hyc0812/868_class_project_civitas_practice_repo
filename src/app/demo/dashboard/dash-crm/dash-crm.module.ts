import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashCrmRoutingModule } from './dash-crm-routing.module';
import { DashCrmComponent } from './dash-crm.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbNavModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, DashCrmRoutingModule, SharedModule, NgbNavModule, NgbModule],
  declarations: [DashCrmComponent]
})
export class DashCrmModule {}
