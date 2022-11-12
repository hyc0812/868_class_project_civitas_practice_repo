import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoOnEnterOnLeaveComponent } from './demo-on-enter-on-leave.component';

describe('DemoOnEnterOnLeaveComponent', () => {
  let component: DemoOnEnterOnLeaveComponent;
  let fixture: ComponentFixture<DemoOnEnterOnLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoOnEnterOnLeaveComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoOnEnterOnLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
