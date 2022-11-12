import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrtRadialComponent } from './crt-radial.component';

describe('CrtRadialComponent', () => {
  let component: CrtRadialComponent;
  let fixture: ComponentFixture<CrtRadialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrtRadialComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtRadialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
