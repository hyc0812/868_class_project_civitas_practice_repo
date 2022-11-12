import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeaheadRoutingModule } from './typeahead-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TypeaheadComponent } from './typeahead.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TypeaheadComponent],
  imports: [CommonModule, TypeaheadRoutingModule, SharedModule, NgbModule, HttpClientModule]
})
export class TypeaheadModule {}
