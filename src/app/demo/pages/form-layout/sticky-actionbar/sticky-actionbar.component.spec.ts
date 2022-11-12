import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyActionbarComponent } from './sticky-actionbar.component';

describe('StickyActionbarComponent', () => {
  let component: StickyActionbarComponent;
  let fixture: ComponentFixture<StickyActionbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyActionbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StickyActionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
