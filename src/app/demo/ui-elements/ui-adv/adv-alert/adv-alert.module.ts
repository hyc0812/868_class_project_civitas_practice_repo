import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvAlertRoutingModule } from './adv-alert-routing.module';
import { AdvAlertComponent } from './adv-alert.component';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { SweetAlert2Module, SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  imports: [CommonModule, AdvAlertRoutingModule, SharedModule, SweetAlert2Module.forRoot()],
  declarations: [AdvAlertComponent],
  providers: [SweetAlert2LoaderService]
})
export class AdvAlertModule {}
