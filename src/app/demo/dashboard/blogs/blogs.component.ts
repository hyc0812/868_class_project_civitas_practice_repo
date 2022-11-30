import { Component, OnInit } from '@angular/core';
import SampleJSON from 'src/fake-data/search-result-aoa-data.json';
import { random } from 'lodash-es';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  constructor() {}
  dtRowSelectOptions: any = {};
  topics: any[] = SampleJSON;
  

  ngOnInit(): void {

    //Display table data
    this.displayTable(this.topics);
  }
    
  

  displayTable(returnedData: any[]) {
    this.dtRowSelectOptions = {
      data: returnedData, //'fake-data/search-result-data.json',
      columns: [
        {
          title: 'Title'
          //data: 'title'
        },
        {
          title: 'Post Type'
          //data: 'postType'
        },
        {
          title: 'Posted On'
          //data: 'postedOn'
        },
        {
          title: 'Author'
          //data: 'author'
        },
        {
          title: 'Action',
          
            "data": null,
            //"defaultContent": '<button class="btn btn-outline-primary btn-sm">View</button>',
            //"defaultContent":'<a [routerLink]="[/dashboard/blogs/show-blog, memberPost.id]"  type="button"  (click)="onSelect(memberPost)" >View </a>',
            "defaultContent":'<a href="/dashboard/blogs/show-blog/1"  type="button" >View </a>',
            "targets": -1
          
        }
      ],
      responsive: true,
      select: true
    };
  }
}
