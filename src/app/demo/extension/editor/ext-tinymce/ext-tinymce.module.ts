import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtTinymceRoutingModule } from './ext-tinymce-routing.module';
import { ExtTinymceComponent } from './ext-tinymce.component';
import { EditorModule } from '@tinymce/tinymce-angular';

import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  imports: [CommonModule, ExtTinymceRoutingModule, SharedModule, EditorModule],
  declarations: [ExtTinymceComponent],
  exports: [ExtTinymceComponent]
})
export class ExtTinymceModule {}
