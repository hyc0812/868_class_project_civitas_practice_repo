import { Component, OnInit } from '@angular/core';
import SampleJSON from 'src/fake-data/search-result-aoa-data.json';
import MembersDB from '../../../../fake-data/members.json';
import { Members } from '../members';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})


export class BlogsComponent implements OnInit {

  constructor() {}
  dtRowSelectOptions: any = {};
  topics: any[] = MembersDB;
  
  ngOnInit(): void {
    //Display table data
    this.displayTable(this.topics);
    // console.log(this.topics[1].id);
  }
    

  displayTable(returnedData: any[]) {
    this.dtRowSelectOptions = {
      data: returnedData, //'fake-data/search-result-data.json',
      columns: [
        {
          "title" : "Title",
          "data" : "posts[,,,].title"
        },
        {
          "title": 'Posted On',
          "data" : "posts[,].createdAt"
        },
        {
          "title": "Author",
          "data": "posts[,,,,,,,].author"
        },
        {
          title: 'Action',
          
            "data": null,
            render: function (data, type, row, meta) {
              return (
                '<a href=/dashboard/blogs/show-blog/' +
                data.id +
                '>' +
                '<button class="btn btn-outline-primary btn-sm">View</button>' +
                '</a>'
              );
            },
        }      
      ],
      responsive: true,
      select: true
    };
  }
}


