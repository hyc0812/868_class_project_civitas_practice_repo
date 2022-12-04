import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { FileUploadValidators } from '@iplab/ngx-file-upload';
import { UserProfile } from './userProfile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private filesControl = new UntypedFormControl(null, FileUploadValidators.filesLimit(2));

  public demoForm = new UntypedFormGroup({
    files: this.filesControl
  });

  userProfile = new UserProfile(42, 'Prakhyat Khati', 'prakhyat.khati09@gmail.com', 'prakhyat', '', 'IoT learner and cloud developer. Quite keen on BlockChain...');

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    console.log(this.userProfile)
  }

  public isCompleteStatus = false;
  public isAssignUsers = false;
  public isRevision = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleStatus() {
    this.filesControl.disabled ? this.filesControl.enable() : this.filesControl.disable();
  }

}
