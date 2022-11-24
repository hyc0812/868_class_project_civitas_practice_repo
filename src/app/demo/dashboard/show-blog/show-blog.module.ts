import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowBlogComponent } from './show-blog.component';
import { ShowBlogRoutingModule } from './show-blog-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { PellWysiwygModule } from '../../extension/editor/pell-wysiwyg/pell-wysiwyg.module';
import { FaqsModule } from '../faqs/faqs.module';



@NgModule({
  declarations: [
    ShowBlogComponent
  ],
  imports: [
    CommonModule,
    ShowBlogRoutingModule,
    SharedModule,
    PellWysiwygModule,
    FaqsModule,
  ]
})
export class ShowBlogModule { }
