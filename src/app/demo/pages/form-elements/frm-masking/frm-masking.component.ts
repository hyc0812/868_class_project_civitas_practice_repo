import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frm-masking',
  templateUrl: './frm-masking.component.html',
  styleUrls: ['./frm-masking.component.scss']
})
export class FrmMaskingComponent implements OnInit {
  public customPatterns = { '0': { pattern: new RegExp('[a-zA-Z]') } };
  constructor() {}

  ngOnInit() {}
  pattern = {
    B: {
      pattern: new RegExp('\\d'),
      symbol: 'X'
    }
  };
}
