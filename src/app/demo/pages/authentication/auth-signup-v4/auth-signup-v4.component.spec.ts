import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignupV4Component } from './auth-signup-v4.component';

describe('AuthSignupV4Component', () => {
  let component: AuthSignupV4Component;
  let fixture: ComponentFixture<AuthSignupV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthSignupV4Component]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthSignupV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
