import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthResetPasswordV5Component } from './auth-reset-password-v5.component';

describe('AuthResetPasswordV5Component', () => {
  let component: AuthResetPasswordV5Component;
  let fixture: ComponentFixture<AuthResetPasswordV5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthResetPasswordV5Component]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthResetPasswordV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
