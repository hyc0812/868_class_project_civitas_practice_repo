import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from './faqs.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FaqsRoutingModule } from './faqs-routing.module';

@NgModule({
  declarations: [FaqsComponent],
  imports: [CommonModule, SharedModule, FaqsRoutingModule]
})
export class FaqsModule {}
