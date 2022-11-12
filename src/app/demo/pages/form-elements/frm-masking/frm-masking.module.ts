import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmMaskingRoutingModule } from './frm-masking-routing.module';
import { FrmMaskingComponent } from './frm-masking.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false
  };
};
@NgModule({
  imports: [CommonModule, FrmMaskingRoutingModule, SharedModule, NgxMaskModule.forRoot(maskConfigFunction)],
  declarations: [FrmMaskingComponent]
})
export class FrmMaskingModule {}
