import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicTabsPillsRoutingModule } from './basic-tabs-pills-routing.module';
import { BasicTabsPillsComponent } from './basic-tabs-pills.component';
import { SharedModule } from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [CommonModule, BasicTabsPillsRoutingModule, SharedModule],
  declarations: [BasicTabsPillsComponent]
})
export class BasicTabsPillsModule {}
