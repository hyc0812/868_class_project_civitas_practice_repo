import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  submitted = false;
  enable = true;
  enableFeature = false;
  count = 0;
  change = false;
  valueChange = false;
  changeEvent: MouseEvent;
  isLoading = false;
  fakeAsync: Observable<boolean> = new Observable((observer) => {
    this.isLoading = true;
    const timeout = setTimeout(() => {
      this.isLoading = false;
      observer.next(true);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  @ViewChild('demoForm') demoForm: NgForm;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: any) {
    this.submitted = true;
  }

  onChange(value: boolean) {
    this.count++;
    this.change = value;
  }

  onChangeEvent(event: MouseEvent) {
    console.log(event, event.toString(), JSON.stringify(event));
    this.changeEvent = event;
  }

  onValueChange(value: boolean) {
    this.valueChange = value;
  }
}
