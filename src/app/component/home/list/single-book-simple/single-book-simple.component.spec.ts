import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookSimpleComponent } from './single-book-simple.component';

describe('SingleBookSimpleComponent', () => {
  let component: SingleBookSimpleComponent;
  let fixture: ComponentFixture<SingleBookSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleBookSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBookSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
