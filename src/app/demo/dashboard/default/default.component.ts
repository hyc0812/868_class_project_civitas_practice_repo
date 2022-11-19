import { Component, OnInit } from '@angular/core';
import SampleJSON from 'src/fake-data/trend-data.json';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  constructor() {}
  topics: any[] = SampleJSON;

  ngOnInit() {
    console.log(this.topics);
  }
}
