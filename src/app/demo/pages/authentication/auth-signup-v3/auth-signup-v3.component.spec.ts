import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignupV3Component } from './auth-signup-v3.component';

describe('AuthSignupV3Component', () => {
  let component: AuthSignupV3Component;
  let fixture: ComponentFixture<AuthSignupV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthSignupV3Component]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthSignupV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
