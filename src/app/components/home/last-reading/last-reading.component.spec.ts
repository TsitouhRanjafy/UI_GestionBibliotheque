import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastReadingComponent } from './last-reading.component';

describe('LastReadingComponent', () => {
  let component: LastReadingComponent;
  let fixture: ComponentFixture<LastReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastReadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
