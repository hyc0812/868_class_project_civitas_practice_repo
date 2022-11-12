import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashProjectRoutingModule } from './dash-project-routing.module';
import { DashProjectComponent } from './dash-project.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, DashProjectRoutingModule, SharedModule, NgbNavModule],
  declarations: [DashProjectComponent]
})
export class DashProjectModule {}
