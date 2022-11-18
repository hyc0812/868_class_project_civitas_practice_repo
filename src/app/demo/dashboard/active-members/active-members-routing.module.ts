import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveMembersComponent } from './active-members.component';



const routes: Routes = [
  {
    path: '',
    component: ActiveMembersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveMembersRoutingModule { }
