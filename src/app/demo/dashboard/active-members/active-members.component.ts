import { Component, OnInit } from '@angular/core';
import MembersJSON from 'src/fake-data/members.json';

@Component({
  selector: 'app-active-members',
  templateUrl: './active-members.component.html',
  styleUrls: ['./active-members.component.scss']
})
export class ActiveMembersComponent implements OnInit {

  constructor() { }

  members = MembersJSON;
  
  ngOnInit(): void {
  }
  
}
