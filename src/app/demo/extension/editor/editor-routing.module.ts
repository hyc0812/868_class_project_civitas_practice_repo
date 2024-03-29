import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'wysiwyg',
        loadChildren: () => import('./pell-wysiwyg/pell-wysiwyg.module').then((m) => m.PellWysiwygModule)
      },
      {
        path: 'tinymce',
        loadChildren: () => import('./ext-tinymce/ext-tinymce.module').then((m) => m.ExtTinymceModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {}
