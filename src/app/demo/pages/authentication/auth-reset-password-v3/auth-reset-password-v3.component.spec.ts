import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthResetPasswordV3Component } from './auth-reset-password-v3.component';

describe('AuthResetPasswordV3Component', () => {
  let component: AuthResetPasswordV3Component;
  let fixture: ComponentFixture<AuthResetPasswordV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthResetPasswordV3Component]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthResetPasswordV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
