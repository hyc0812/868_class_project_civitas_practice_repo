import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullEventCalendarComponent } from './full-event-calendar.component';

const routes: Routes = [
  {
    path: '',
    component: FullEventCalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullEventCalendarRoutingModule {}
