import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormLayoutRoutingModule } from './form-layout-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormLayoutRoutingModule, SharedModule]
})
export class FormLayoutModule {}
