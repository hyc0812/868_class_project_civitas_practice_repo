import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WgetChartsComponent } from './wget-charts.component';

describe('WgetChartsComponent', () => {
  let component: WgetChartsComponent;
  let fixture: ComponentFixture<WgetChartsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WgetChartsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WgetChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
