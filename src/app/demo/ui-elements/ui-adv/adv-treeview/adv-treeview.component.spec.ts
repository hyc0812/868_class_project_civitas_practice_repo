import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvTreeviewComponent } from './adv-treeview.component';

describe('AdvTreeviewComponent', () => {
  let component: AdvTreeviewComponent;
  let fixture: ComponentFixture<AdvTreeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvTreeviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
