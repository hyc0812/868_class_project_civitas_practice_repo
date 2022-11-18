import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreComponent } from './more.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { MoreRoutingModule } from './more-routing.module';

@NgModule({
  declarations: [MoreComponent],
  imports: [CommonModule, SharedModule, MoreRoutingModule]
})
export class MoreModule {}
