import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowBlogComponent } from './show-blog.component';
import { ShowBlogRoutingModule } from './show-blog-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { PellWysiwygModule } from '../../extension/editor/pell-wysiwyg/pell-wysiwyg.module';



@NgModule({
  declarations: [
    ShowBlogComponent
  ],
  imports: [
    CommonModule,
    ShowBlogRoutingModule,
    SharedModule,
    PellWysiwygModule
  ]
})
export class ShowBlogModule { }
