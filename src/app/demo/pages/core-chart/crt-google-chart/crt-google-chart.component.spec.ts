import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrtGoogleChartComponent } from './crt-google-chart.component';

describe('CrtGoogleChartComponent', () => {
  let component: CrtGoogleChartComponent;
  let fixture: ComponentFixture<CrtGoogleChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrtGoogleChartComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtGoogleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
