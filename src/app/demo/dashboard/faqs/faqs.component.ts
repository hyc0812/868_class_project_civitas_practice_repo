import { Component, OnInit } from '@angular/core';
import MembersJSON from 'src/fake-data/members.json';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  members = MembersJSON;
  
  constructor() {}

  ngOnInit(): void {}
}
