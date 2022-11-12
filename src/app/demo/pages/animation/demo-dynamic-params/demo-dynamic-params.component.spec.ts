import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDynamicParamsComponent } from './demo-dynamic-params.component';

describe('DemoDynamicParamsComponent', () => {
  let component: DemoDynamicParamsComponent;
  let fixture: ComponentFixture<DemoDynamicParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDynamicParamsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoDynamicParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
