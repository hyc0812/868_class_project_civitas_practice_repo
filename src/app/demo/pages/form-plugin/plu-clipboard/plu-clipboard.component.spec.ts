import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluClipboardComponent } from './plu-clipboard.component';

describe('PluClipboardComponent', () => {
  let component: PluClipboardComponent;
  let fixture: ComponentFixture<PluClipboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluClipboardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PluClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
