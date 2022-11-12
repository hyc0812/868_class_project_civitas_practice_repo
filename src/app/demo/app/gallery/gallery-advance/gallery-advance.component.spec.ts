import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GalleryAdvanceComponent } from './gallery-advance.component';

describe('GalleryAdvanceComponent', () => {
  let component: GalleryAdvanceComponent;
  let fixture: ComponentFixture<GalleryAdvanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryAdvanceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
