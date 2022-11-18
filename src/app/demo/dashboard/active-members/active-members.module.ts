import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveMembersComponent } from './active-members.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { ActiveMembersRoutingModule } from './active-members-routing.module';


@NgModule({
  declarations: [
    ActiveMembersComponent
  ],
  imports: [
    CommonModule, SharedModule, ActiveMembersRoutingModule, 
  ]
})
export class ActiveMembersModule { }
