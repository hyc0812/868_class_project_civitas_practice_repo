import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicTostsRoutingModule } from './basic-tosts-routing.module';
import { BasicTostsComponent } from './basic-tosts.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ToastContainerModule, ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { NotyfToast } from './tosts Config/notyf.toast';
import { PinkToast } from './tosts Config/pink.toast';
import { BootstrapToast } from './tosts Config/bootstrap.toast';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [BasicTostsComponent, NotyfToast, PinkToast, BootstrapToast],
  imports: [
    CommonModule,
    BasicTostsRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    ToastNoAnimationModule,
    FormsModule,
    HttpClientModule
    // BrowserAnimationsModule
  ]
})
export class BasicTostsModule {}
