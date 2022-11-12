import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StickyActionbarComponent } from './sticky-actionbar.component';

const routes: Routes = [
  {
    path: '',
    component: StickyActionbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StickyActionbarRoutingModule {}
