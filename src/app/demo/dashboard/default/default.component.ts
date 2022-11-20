import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SampleJSON from 'src/fake-data/trend-data.json';
import { random } from 'lodash-es';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  searchBox = '';
  constructor(private router: Router) {}
  topics: any[] = SampleJSON;
  blogImageId0 = random(0, this.topics[0].images.length - 1);
  blogImageId1 = random(0, this.topics[1].images.length - 1);
  blogImageId2 = random(0, this.topics[2].images.length - 1);

  ngOnInit() {
    this.blogImageId0 = random(0, this.topics[0].images.length - 1);
    this.blogImageId1 = random(0, this.topics[1].images.length - 1);
    this.blogImageId2 = random(0, this.topics[2].images.length - 1);
  }

  searchQuery(searchText: string): void {
    console.log(searchText);
    this.router.navigateByUrl('/dashboard/default/search-result?searchText');
  }
}
