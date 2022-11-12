import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmValidationRoutingModule } from './frm-validation-routing.module';
import { FrmValidationComponent } from './frm-validation.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NarikCustomValidatorsModule } from '@narik/custom-validators';

@NgModule({
  imports: [CommonModule, FrmValidationRoutingModule, SharedModule, NarikCustomValidatorsModule],
  declarations: [FrmValidationComponent]
})
export class FrmValidationModule {}
