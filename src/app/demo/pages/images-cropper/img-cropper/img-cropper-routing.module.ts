import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgCropperComponent } from './img-cropper.component';

const routes: Routes = [
  {
    path: '',
    component: ImgCropperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImgCropperRoutingModule {}
