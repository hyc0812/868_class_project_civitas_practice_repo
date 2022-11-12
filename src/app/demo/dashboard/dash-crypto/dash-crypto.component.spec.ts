import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashCryptoComponent } from './dash-crypto.component';

describe('DashCryptoComponent', () => {
  let component: DashCryptoComponent;
  let fixture: ComponentFixture<DashCryptoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashCryptoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
