import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSigninV3Component } from './auth-signin-v3.component';

describe('AuthSigninV3Component', () => {
  let component: AuthSigninV3Component;
  let fixture: ComponentFixture<AuthSigninV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthSigninV3Component]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthSigninV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
