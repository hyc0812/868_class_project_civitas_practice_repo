import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeLayout44Component } from './theme-layout44.component';

describe('ThemeLayout44Component', () => {
  let component: ThemeLayout44Component;
  let fixture: ComponentFixture<ThemeLayout44Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeLayout44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLayout44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
