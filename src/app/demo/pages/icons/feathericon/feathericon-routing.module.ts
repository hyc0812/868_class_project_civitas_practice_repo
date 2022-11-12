import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeathericonComponent } from './feathericon.component';

const routes: Routes = [
  {
    path: '',
    component: FeathericonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeathericonRoutingModule {}
