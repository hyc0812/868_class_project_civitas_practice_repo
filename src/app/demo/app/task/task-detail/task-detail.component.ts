import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit, OnDestroy {
  public future: Date;
  public futureString = 'July 29, 2023 12:00:00';
  public diff: number;
  public $counter: Observable<number>;
  public subscription: Subscription;
  public message: string;
  public dYears: number;
  public dDays: number;
  public dHours: number;
  public dMinutes: number;
  public dSeconds: number;

  constructor() {}

  ngOnInit() {
    this.future = new Date(this.futureString);
    this.$counter = interval(1000).pipe(
      map((x) => {
        this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
        return x;
      })
    );

    this.subscription = this.$counter.subscribe((x) => (this.message = this.dhms(this.diff)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  dhms(t) {
    let years = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    days = Math.floor(t / 86400);
    if (days > 365) {
      years = Math.floor(days / 365);
      days = days - years * 365;
    }
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    this.dYears = years;
    this.dDays = days;
    this.dHours = hours;
    this.dMinutes = minutes;
    this.dSeconds = seconds;

    return [years + ' years', days + ' days', hours + ' hours', minutes + ' min', seconds + ' sec'].join(' ');
  }
}
