import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmActionbarsComponent } from './frm-actionbars.component';

describe('FrmActionbarsComponent', () => {
  let component: FrmActionbarsComponent;
  let fixture: ComponentFixture<FrmActionbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrmActionbarsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FrmActionbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
