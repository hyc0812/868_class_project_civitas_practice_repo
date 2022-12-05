import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { HelpRoutingModule } from './help-routing.module';
import { ArchwizardModule } from 'angular-archwizard';

@NgModule({
  declarations: [HelpComponent],
  imports: [CommonModule, SharedModule, HelpRoutingModule, ArchwizardModule]
})
export class HelpModule {}
