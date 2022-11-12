import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDemoComponent } from './day-demo.component';

describe('DayDemoComponent', () => {
  let component: DayDemoComponent;
  let fixture: ComponentFixture<DayDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayDemoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
