import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SampleJSON from 'src/fake-data/members.json';


@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.scss']
})
export class ShowBlogComponent implements OnInit {
  
  selectedPost: any;

  constructor(private route: ActivatedRoute) {}

  members: any[] = SampleJSON;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postId = routeParams.get('postId');

    for (let i = 0; i < this.members.length; i++) {
      for (let j = 0; j < this.members[i].posts.length; j++) {
        if(this.members[i].posts[j].postId == postId){
          this.selectedPost = this.members[i].posts[j];
          this.selectedPost.registeredMember = this.members[i];
          break;
        }
      }
    }

  }

}
