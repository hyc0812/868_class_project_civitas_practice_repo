import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';
import { CrtEchartRoutingModule } from './crt-echart-routing.module';
import { CrtEchartComponent } from './crt-echart.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [CommonModule, CrtEchartRoutingModule, SharedModule, NgxEchartsModule.forRoot({ echarts })],
  declarations: [CrtEchartComponent]
})
export class CrtEchartModule {}
