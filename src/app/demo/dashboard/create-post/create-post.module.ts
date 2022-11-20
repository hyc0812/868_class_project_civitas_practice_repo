import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CreatePostRoutingModule } from './create-post-routing.module';

@NgModule({
  declarations: [
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CreatePostRoutingModule
  ]
})
export class CreatePostModule { }
