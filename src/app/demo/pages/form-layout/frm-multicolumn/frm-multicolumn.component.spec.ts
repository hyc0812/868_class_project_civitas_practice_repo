import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmMulticolumnComponent } from './frm-multicolumn.component';

describe('FrmMulticolumnComponent', () => {
  let component: FrmMulticolumnComponent;
  let fixture: ComponentFixture<FrmMulticolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrmMulticolumnComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FrmMulticolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
