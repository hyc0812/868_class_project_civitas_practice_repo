import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeLayout6Component } from './theme-layout6.component';

describe('ThemeLayout6Component', () => {
  let component: ThemeLayout6Component;
  let fixture: ComponentFixture<ThemeLayout6Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeLayout6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLayout6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
