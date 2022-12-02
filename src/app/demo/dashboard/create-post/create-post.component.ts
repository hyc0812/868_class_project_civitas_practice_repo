import { Component, OnInit } from '@angular/core';
import  {Post}  from './post';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent implements OnInit {

  tags = ['Weather', 'Family', 'Community', 'Wellness', 'Food', 'Drinks', 'Fine Dining', 'Immigration', 'Education'];

  postOns = ['FAQs', 'Blogs'];

  model = new Post(12, '', '', '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Post(42, '', '', '', '', '');
  }

  // skyDog(): Post {
  //   const myHero =  new Post(42, 'SkyDog',
  //                          'Fetch any object at any distance',
  //                          'Leslie Rollover');
  //   console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
  //   return myHero;
  // }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  // showFormControls(form: any) {
  //   return form && form.controls.name &&
  //   form.controls.name.value; // Dr. IQ
  // }

  /////////////////////////////



  constructor() { }

  ngOnInit(): void {}

}
