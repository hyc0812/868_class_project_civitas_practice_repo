import { Component, OnInit } from '@angular/core';
import  {Post}  from './post';
import { UntypedFormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent implements OnInit {

  tags = ['Weather', 'Family', 'Community', 'Wellness', 'Food', 'Drinks', 'Fine Dining', 'Immigration', 'Education'];

  postOns = ['FAQs', 'Blogs'];

  model = new Post(12, 'Prakhyat', 'Any personal recommendations for a nice restaurant?', '', 'FAQs', 'Hello there, I would like to know ...');

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    console.log(this.model);
   }

  submitAlert() {
    Swal.fire({
      title: 'Post Published!',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    }).then((isOkay) => {
      if (isOkay){
        this.onSubmit;
        this.router.navigate(['dashboard/blogs']);
      }
    }
    );
  }

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



  items = ['Amsterdam', 'Washington', 'Sydney', 'Beijing', 'Cairo'];
  itemsAsObjects = [
    { id: 0, name: 'Amsterdam', readonly: true },
    { id: 1, name: 'Washington' },
    { id: 2, name: 'Sydney', readonly: true },
    { id: 3, name: 'Beijing', readonly: true },
    { id: 4, name: 'Cairo' }
  ];

  public errorMessages = {
    'startsWithAt@': "Your items need to start with '@'",
    endsWith$: "Your items need to end with '$'"
  };

  public validators = [this.startsWithAt, this.endsWith$];

  private startsWithAt(control: UntypedFormControl) {
    if (control.value.charAt(0) !== '@') {
      return {
        'startsWithAt@': true
      };
    }

    return null;
  }

  private endsWith$(control: UntypedFormControl) {
    if (control.value.charAt(control.value.length - 1) !== '$') {
      return {
        endsWith$: true
      };
    }

    return null;
  }



  constructor(private router: Router) { }

  ngOnInit(): void {}

}
