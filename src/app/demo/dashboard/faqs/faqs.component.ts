import { Component, OnInit } from '@angular/core';
import MembersJSON from 'src/fake-data/members.json';
import { Members } from '../members';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})


export class FaqsComponent implements OnInit {

  members = MembersJSON;
  selectedPost?: Members["posts"];
  
  constructor() {}

  ngOnInit(): void {}

  onSelect(memberPost: Members["posts"]): void {
    this.selectedPost = memberPost;
    console.log(this.selectedPost["postContent"]);
    console.log(this.members.find(x => x.id === 9).name);
  }

}

// picture = data.find(x => x.id == SOME_ID).pic