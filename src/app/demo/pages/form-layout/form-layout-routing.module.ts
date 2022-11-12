import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'layout',
        loadChildren: () => import('./frm-layout/frm-layout.module').then((m) => m.FrmLayoutModule)
      },
      {
        path: 'multicolumn',
        loadChildren: () => import('./frm-multicolumn/frm-multicolumn.module').then((m) => m.FrmMulticolumnModule)
      },
      {
        path: 'actionbars',
        loadChildren: () => import('./frm-actionbars/frm-actionbars.module').then((m) => m.FrmActionbarsModule)
      },
      {
        path: 'stickyactionbar',
        loadChildren: () => import('./sticky-actionbar/sticky-actionbar.module').then((m) => m.StickyActionbarModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormLayoutRoutingModule {}
