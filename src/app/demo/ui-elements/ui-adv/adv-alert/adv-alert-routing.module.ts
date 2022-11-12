import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvAlertComponent } from './adv-alert.component';

const routes: Routes = [
  {
    path: '',
    component: AdvAlertComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvAlertRoutingModule {}
