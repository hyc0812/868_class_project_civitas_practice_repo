import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchRoutingModule } from './switch-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UiSwitchModule } from 'ngx-ui-switch';
import { SwitchComponent } from './switch.component';
import { FrmSwitchModule } from '../switch/public_api';

@NgModule({
  declarations: [SwitchComponent],
  imports: [CommonModule, SwitchRoutingModule, SharedModule, UiSwitchModule, FrmSwitchModule]
})
export class SwitchModule {}
