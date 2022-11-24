import { Component, Input, OnInit } from '@angular/core';
import { FaqsComponent } from '../faqs/faqs.component';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.scss']
})
export class ShowBlogComponent implements OnInit {

  @Input() selectedPost: FaqsComponent["selectedPost"];


  constructor() { }

  ngOnInit(): void {

  }

}
