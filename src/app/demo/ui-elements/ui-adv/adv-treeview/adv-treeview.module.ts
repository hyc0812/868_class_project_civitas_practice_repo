import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvTreeviewRoutingModule } from './adv-treeview-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AdvTreeviewComponent } from './adv-treeview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AdvTreeviewComponent],
  imports: [
    CommonModule,
    AdvTreeviewRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTreeModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class AdvTreeviewModule {}
