import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleReCaptchaComponent } from './google-re-captcha.component';

describe('GoogleReCaptchaComponent', () => {
  let component: GoogleReCaptchaComponent;
  let fixture: ComponentFixture<GoogleReCaptchaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleReCaptchaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleReCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
