import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WgetUserCardComponent } from './wget-user-card.component';

describe('WgetUserCardComponent', () => {
  let component: WgetUserCardComponent;
  let fixture: ComponentFixture<WgetUserCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WgetUserCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WgetUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
