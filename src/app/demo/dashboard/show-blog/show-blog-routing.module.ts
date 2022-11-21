import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowBlogComponent } from './show-blog.component';


const routes: Routes = [
  {
    path: '',
    component: ShowBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowBlogRoutingModule { }
