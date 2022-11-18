import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { BlogsRoutingModule } from './blogs-routing.module';

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, SharedModule, BlogsRoutingModule]
})
export class BlogsModule {}
