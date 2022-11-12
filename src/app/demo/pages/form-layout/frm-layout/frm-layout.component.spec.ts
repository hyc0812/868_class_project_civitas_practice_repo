import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmLayoutComponent } from './frm-layout.component';

describe('FrmLayoutComponent', () => {
  let component: FrmLayoutComponent;
  let fixture: ComponentFixture<FrmLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrmLayoutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FrmLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
