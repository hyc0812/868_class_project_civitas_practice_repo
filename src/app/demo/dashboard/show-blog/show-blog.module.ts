import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowBlogComponent } from './show-blog.component';
import { ShowBlogRoutingModule } from './show-blog-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';



@NgModule({
  declarations: [
    ShowBlogComponent
  ],
  imports: [
    CommonModule,
    ShowBlogRoutingModule,
    SharedModule
  ]
})
export class ShowBlogModule { }
