import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PluClipboardComponent } from './plu-clipboard.component';

const routes: Routes = [
  {
    path: '',
    component: PluClipboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluClipboardRoutingModule {}
