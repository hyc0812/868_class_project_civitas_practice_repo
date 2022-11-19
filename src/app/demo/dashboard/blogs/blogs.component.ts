import { Component, OnInit } from '@angular/core';
import SampleJSON from 'src/fake-data/trend-data.json';
import { random } from 'lodash-es';

declare var $: any;

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  constructor() {}
  topics: any[] = SampleJSON;
  blogImageId0 = random(0, this.topics[0].images.length - 1);
  blogImageId1 = random(0, this.topics[1].images.length - 1);
  blogImageId2 = random(0, this.topics[2].images.length - 1);

  ngOnInit(): void {
    this.blogImageId0 = random(0, this.topics[0].images.length - 1);
    this.blogImageId1 = random(0, this.topics[1].images.length - 1);
    this.blogImageId2 = random(0, this.topics[2].images.length - 1);
  }
}
