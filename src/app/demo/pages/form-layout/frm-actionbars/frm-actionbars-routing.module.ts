import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrmActionbarsComponent } from './frm-actionbars.component';

const routes: Routes = [
  {
    path: '',
    component: FrmActionbarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrmActionbarsRoutingModule {}
