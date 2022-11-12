import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

import { FormPluginRoutingModule } from './form-plugin-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormPluginRoutingModule, SharedModule]
})
export class FormPluginModule {}
