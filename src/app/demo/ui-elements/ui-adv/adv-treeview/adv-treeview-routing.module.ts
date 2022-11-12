import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvTreeviewComponent } from './adv-treeview.component';

const routes: Routes = [
  {
    path: '',
    component: AdvTreeviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvTreeviewRoutingModule {}
