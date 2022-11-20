import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SharedModule } from '../../../theme/shared/shared.module';
import { SearchResultComponent } from './search-result.component';

@NgModule({
  imports: [CommonModule, SearchResultRoutingModule, SharedModule, DataTablesModule],
  declarations: [SearchResultComponent]
})
export class SearchResultModule {}
