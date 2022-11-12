import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-adv-rating',
  templateUrl: './adv-rating.component.html',
  styleUrls: [
    './adv-rating.component.scss',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-default-theme.scss',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-horizontal-theme.scss',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-vertical-theme.scss',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-stars-theme.scss',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-movie-theme.scss',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-square-theme.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdvRatingComponent implements OnInit {
  public rateDefault = 1;
  public rateFa = 1;
  public rateFao = 5.6;
  public rateMovie = 2;
  public rateHorizontal = 7;
  public rateVertical = 1;
  public rateStar = 5;
  public rateSquare = 2;

  constructor() {}

  ngOnInit() {}
}
