import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTostsComponent } from './basic-tosts.component';

const routes: Routes = [
  {
    path: '',
    component: BasicTostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicTostsRoutingModule {}
