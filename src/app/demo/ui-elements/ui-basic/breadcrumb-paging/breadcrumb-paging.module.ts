import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbPagingRoutingModule } from './breadcrumb-paging-routing.module';
import { BreadcrumbPagingComponent } from './breadcrumb-paging.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbPaginationModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, BreadcrumbPagingRoutingModule, SharedModule, NgbToastModule, NgbPaginationModule],
  declarations: [BreadcrumbPagingComponent]
})
export class BreadcrumbPagingModule {}
