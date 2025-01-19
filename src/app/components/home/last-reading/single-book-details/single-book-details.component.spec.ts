import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookDetailsComponent } from './single-book-details.component';

describe('SingleBookDetailsComponent', () => {
  let component: SingleBookDetailsComponent;
  let fixture: ComponentFixture<SingleBookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleBookDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
