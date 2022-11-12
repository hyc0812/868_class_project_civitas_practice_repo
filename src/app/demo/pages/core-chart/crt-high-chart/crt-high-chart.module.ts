import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrtHighChartRoutingModule } from './crt-high-chart-routing.module';
import { CrtHighChartComponent } from './crt-high-chart.component';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, CrtHighChartRoutingModule, SharedModule, HighchartsChartModule, HttpClientModule],
  declarations: [CrtHighChartComponent]
})
export class CrtHighChartModule {}
