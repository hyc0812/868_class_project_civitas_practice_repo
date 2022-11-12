import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayDemoComponent } from './day-demo.component';

const routes: Routes = [
  {
    path: '',
    component: DayDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayDemoRoutingModule {}
