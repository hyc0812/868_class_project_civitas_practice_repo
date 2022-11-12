import { Component, OnInit } from '@angular/core';
import { DateComponent } from '../common/date-component.component';
import { FormControl } from '@angular/forms';
import { DEF_CONF } from '../common/conts/consts';
import { IDatePickerConfig } from '../date-picker/date-picker-config.model';

@Component({
  selector: 'app-day-demo',
  templateUrl: './day-demo.component.html',
  styleUrls: ['./day-demo.component.scss']
})
export class DayDemoComponent extends DateComponent implements OnInit {
  control: FormControl;
  config: IDatePickerConfig = {
    ...DEF_CONF,
    format: 'DD-MM-YYYY'
  };

  config1: IDatePickerConfig = {
    ...DEF_CONF,
    format: 'DD-MM-YYYY HH:mm:ss'
  };

  // config2: IDatePickerConfig = {
  //   ...DEF_CONF,
  //   format: 'MMM, YYYY'
  // };

  // config4: IDatePickerConfig = {
  //   ...DEF_CONF,
  //   format: 'HH:mm:ss'
  // };

  ngOnInit(): void {
    this.control = this.buildForm();
  }
}
