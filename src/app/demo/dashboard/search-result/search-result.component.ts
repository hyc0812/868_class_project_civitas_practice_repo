import { Component, OnInit } from '@angular/core';
import SampleJSON from 'src/fake-data/search-result-aoa-data.json';
import { random } from 'lodash-es';
import { ActivatedRoute } from '@angular/router';

export interface tableData {
  id: number;
  title: string;
  postType: string;
  postedOn: string;
  author: string;
}

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  dtRowSelectOptions: any = {};

  constructor(private route: ActivatedRoute) {}
  topics: any[] = SampleJSON;

  ngOnInit() {
    //get Parameter
    const routeParams = this.route.snapshot.paramMap;
    const searchText = routeParams.get('searchText');
    console.log('Search Results: ' + searchText);

    //Pass the above parameter to an http get request to the server
    //Get the result, parse it and use it to populate the table

    const filteredResults: any[] = this.getSearchResults(searchText);

    //Display table data
    this.displayTable(filteredResults);
  }

  getSearchResults(searchText: string): any[] {
    const innerArray = searchText.split(' ');
    const returnedArray: any[] = [];

    for (let i = 0; i < innerArray.length; i++) {
      for (let j = 0; j < this.topics.length; j++) {
        for (let k = 0; k < this.topics[j].length; k++) {
          //console.log(this.topics[j][k].includes(innerArray[i]));
          if (this.topics[j][k].includes(innerArray[i])) {
            returnedArray.push(this.topics[j]);
            break;
          }
        }
      }
    }
    return returnedArray;
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
        }
      ],
      responsive: true,
      select: true
    };
  }

  //I need to add ability to initiate a search from within this page
}
