import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashCryptoRoutingModule } from './dash-crypto-routing.module';
import { DashCryptoComponent } from './dash-crypto.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [CommonModule, DashCryptoRoutingModule, SharedModule],
  declarations: [DashCryptoComponent]
})
export class DashCryptoModule {}
