import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'img-cropper',
        loadChildren: () => import('./img-cropper/img-cropper.module').then((m) => m.ImgCropperModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesCropperRoutingModule {}
