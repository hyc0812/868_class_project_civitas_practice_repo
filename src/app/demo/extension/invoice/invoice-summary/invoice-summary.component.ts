import { Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs';

import '../../../../../../node_modules/morris.js/morris.js';
import '../../../../../../node_modules/morris.js/morris.min.js';
import '../../../../../../node_modules/raphael/raphael.js';
import '../../../../../../node_modules/jquery/dist/jquery.slim.js';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.scss']
})
export class InvoiceSummaryComponent implements OnInit {
  public chartBarData = [
    { y: '2006', a: 50, b: 40 },
    { y: '2007', a: 75, b: 65 },
    { y: '2008', a: 50, b: 40 },
    { y: '2009', a: 75, b: 65 }
  ];

  public chartBarOptions = {
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Net Profit', 'Revenue'],
    barSizeRatio: 0.7,
    barGap: 5,
    barColors: ['0-#1de9b6-#1dc4e9', '0-#899FD4-#A389D4'],
    resize: true,
    responsive: true
  };

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }

  constructor() {}

  ngOnInit() {}
}
