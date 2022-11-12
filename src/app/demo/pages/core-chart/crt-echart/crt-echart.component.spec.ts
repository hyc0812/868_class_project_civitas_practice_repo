import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrtEchartComponent } from './crt-echart.component';

describe('CrtEchartComponent', () => {
  let component: CrtEchartComponent;
  let fixture: ComponentFixture<CrtEchartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrtEchartComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtEchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
