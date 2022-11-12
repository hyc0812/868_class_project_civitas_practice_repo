import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthResetPasswordV4Component } from './auth-reset-password-v4.component';

describe('AuthResetPasswordV4Component', () => {
  let component: AuthResetPasswordV4Component;
  let fixture: ComponentFixture<AuthResetPasswordV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthResetPasswordV4Component]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthResetPasswordV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
