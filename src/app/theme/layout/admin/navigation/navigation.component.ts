import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemeConfig } from '../../../../app-config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() onNavCollapse = new EventEmitter();
  @Output() onNavCollapsedMob = new EventEmitter();
  public config: any;
  public navCollapsed;
  public navCollapsedMob;
  public windowWidth: number;

  constructor() {
    this.config = ThemeConfig.config;
    this.windowWidth = window.innerWidth;
    this.navCollapsed = this.windowWidth >= 992 ? this.config['collapse-menu'] : false;
    this.navCollapsedMob = false;
  }

  ngOnInit() {}

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.navCollapsed = !this.navCollapsed;
      this.onNavCollapse.emit();
    }
  }

  navCollapseMob() {
    if (this.windowWidth < 992) {
      this.onNavCollapsedMob.emit();
    }
  }
}
