import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluClipboardRoutingModule } from './plu-clipboard-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { PluClipboardComponent } from './plu-clipboard.component';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PluClipboardComponent],
  imports: [CommonModule, PluClipboardRoutingModule, SharedModule, ClipboardModule, FormsModule]
})
export class PluClipboardModule {}
