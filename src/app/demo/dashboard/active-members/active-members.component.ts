import { Component, OnInit } from '@angular/core';
import ActiveMembersJSON from 'src/fake-data/active-members.json';

@Component({
  selector: 'app-active-members',
  templateUrl: './active-members.component.html',
  styleUrls: ['./active-members.component.scss']
})
export class ActiveMembersComponent implements OnInit {

  constructor() { }

  activeMembers = ActiveMembersJSON;
  
  ngOnInit(): void {
  }
  
}
