import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-plu-clipboard',
  templateUrl: './plu-clipboard.component.html',
  styleUrls: ['./plu-clipboard.component.scss']
})
export class PluClipboardComponent implements OnInit {
  text1: string;
  text2: string;
  textModal: string;
  isCopied1: boolean;
  isCopied2: boolean;
  isCopied3: boolean;
  basic = false;

  constructor(private _clipboardService: ClipboardService) {}

  ngOnInit(): void {
    this._clipboardService.copyResponse$.subscribe((re) => {
      if (re.isSuccess) {
        alert('copy success!');
      }
    });
  }
  callServiceToCopy() {
    this._clipboardService.copy('This is copy thru service copyFromContent directly');
  }

  onCopyFailure() {
    alert('copy fail!');
  }
}
