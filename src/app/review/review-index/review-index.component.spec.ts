import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewIndexComponent } from './review-index.component';

describe('ReviewIndexComponent', () => {
  let component: ReviewIndexComponent;
  let fixture: ComponentFixture<ReviewIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewIndexComponent]
    });
    fixture = TestBed.createComponent(ReviewIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
