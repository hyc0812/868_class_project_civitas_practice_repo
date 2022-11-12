import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WgetStatisticComponent } from './wget-statistic.component';

describe('WgetStatisticComponent', () => {
  let component: WgetStatisticComponent;
  let fixture: ComponentFixture<WgetStatisticComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WgetStatisticComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WgetStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
