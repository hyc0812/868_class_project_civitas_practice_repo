import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignupV5Component } from './auth-signup-v5.component';

describe('AuthSignupV5Component', () => {
  let component: AuthSignupV5Component;
  let fixture: ComponentFixture<AuthSignupV5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthSignupV5Component]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthSignupV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
