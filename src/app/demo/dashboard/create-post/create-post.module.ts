import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CreatePostRoutingModule } from './create-post-routing.module';
import { FilesUploadModule } from '../../extension/files-upload/files-upload.module';
import { PellWysiwygModule } from '../../extension/editor/pell-wysiwyg/pell-wysiwyg.module';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    CreatePostComponent
  ],
  exports: [CreatePostComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreatePostRoutingModule,
    FormsModule,
    PellWysiwygModule,
    TagInputModule
  ]
})
export class CreatePostModule { }
