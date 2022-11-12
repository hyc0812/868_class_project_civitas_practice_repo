import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayDemoRoutingModule } from './day-demo-routing.module';
import { DayDemoComponent } from './day-demo.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ConfigFormComponent } from '../config-form/config-form.component';

@NgModule({
  declarations: [DayDemoComponent, ConfigFormComponent],
  imports: [CommonModule, DayDemoRoutingModule, SharedModule, DpDatePickerModule]
})
export class DayDemoModule {}
