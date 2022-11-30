import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { BlogsRoutingModule } from './blogs-routing.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, SharedModule, BlogsRoutingModule, DataTablesModule]
})
export class BlogsModule {}
