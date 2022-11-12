import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, EcommerceRoutingModule, SharedModule, NgbModule],
  declarations: [EcommerceComponent]
})
export class EcommerceModule {}
