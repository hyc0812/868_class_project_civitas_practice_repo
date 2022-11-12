import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrmMulticolumnComponent } from './frm-multicolumn.component';

const routes: Routes = [
  {
    path: '',
    component: FrmMulticolumnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrmMulticolumnRoutingModule {}
