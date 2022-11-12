import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeLayout5hComponent } from './theme-layout5h.component';

describe('ThemeLayout5hComponent', () => {
  let component: ThemeLayout5hComponent;
  let fixture: ComponentFixture<ThemeLayout5hComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeLayout5hComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLayout5hComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
