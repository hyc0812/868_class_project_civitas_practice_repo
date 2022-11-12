import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationRoutingModule } from './animation-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnimationComponent } from './animation.component';
import { DemoDynamicParamsComponent } from './demo-dynamic-params/demo-dynamic-params.component';
import { DemoOnEnterOnLeaveComponent } from './demo-on-enter-on-leave/demo-on-enter-on-leave.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [AnimationComponent, DemoDynamicParamsComponent, DemoOnEnterOnLeaveComponent],
  imports: [
    CommonModule,
    AnimationRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    SharedModule
  ]
})
export class AnimationModule {}
