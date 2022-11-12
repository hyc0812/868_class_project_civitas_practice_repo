import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrmLayoutComponent } from './frm-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FrmLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrmLayoutRoutingModule {}
