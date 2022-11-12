import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPersonalInfoRoutingModule } from './auth-personal-info-routing.module';
import { AuthPersonalInfoComponent } from './auth-personal-info.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AuthPersonalInfoRoutingModule, NgbToastModule, FormsModule, ReactiveFormsModule],
  declarations: [AuthPersonalInfoComponent]
})
export class AuthPersonalInfoModule {}
