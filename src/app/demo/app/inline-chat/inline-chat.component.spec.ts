import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InlineChatComponent } from './inline-chat.component';

describe('InlineChatComponent', () => {
  let component: InlineChatComponent;
  let fixture: ComponentFixture<InlineChatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InlineChatComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
