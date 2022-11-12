import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {
  public radioButtons: string;
  public checkBox: any;
  public radio: FormControl;
  // public checkbox: FormGroup

  constructor() {
    this.radioButtons = '1';
    this.checkBox = {
      left: true,
      center: false,
      right: false
    };
  }

  ngOnInit() {}
}
